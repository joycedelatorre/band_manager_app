import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css'; // test this . . . change some values in App.css to see if it's being implemented in the page render

import Navbar from './components/Navbar';
import Background from "./components/Background/image/image.jpg";
import Footer from './components/Footer';

import HomePage from './components/HomePage.jsx';

import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import HelpWantedPage from './containers/HelpWantedPage.jsx';
import HelpWantedPostPage from './containers/HelpWantedPostPage.jsx';

import GigsPage from './containers/GigsPage.jsx';

import Auth from './utils/Auth';

const sectionStyle = {
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundImage: "url(" + Background + ")",
  backgroundRepeat: "no-repeat center center fixed",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  width: "100%",
  position: "absolute",
  overflow: 'scroll'
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    Auth.isUserAuthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    ) : (
      <Component {...props} {...rest} />
    )
  )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus()
  }

  toggleAuthenticateStatus() {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() })
  }

  render() {
    return (
      
        <Router>
          <div style={ sectionStyle }>

            {
              this.state.authenticated ? (
                // Navbar for logged in user
                <Navbar>
                  {[
                    {path: "/dashboard", name: "Dashboard"},
                    {path:"/Gigs", name:"Gigs"},
                    {path:"/helpwanted", name:"Help Wanted"},
                    {path:"/helpwantedpost", name: "Find Artists"},
                    {path: "/logout", name: "Log out"}
                  ]}
                </Navbar>
              ) : (
                // Navbar for no login
                <Navbar>
                  {[
                    {path: "/login", name: "Log in"},
                    {path: "/signup", name: "Sign up"},
                    // {path: "/helpwantedpost", name: "Find Artists"}
                  ]}
                </Navbar>
              )
            }

            <section>
              <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
              <PropsRoute exact path="/helpwanted" component={HelpWantedPage}/>
              <PropsRoute exact path="/helpwantedpost" component={HelpWantedPostPage}/>
              {/* <LoggedOutRoute exact path="/helpwantedpost" component={HelpWantedPostPage}/> */}
              <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
              <LoggedOutRoute path="/signup" component={SignUpPage} />
              <Route path="/logout" component={LogoutFunction} />

              <PrivateRoute path="/dashboard" component={DashboardPage} />

              <PrivateRoute path="/Gigs" component={GigsPage} />
              {/* <PrivateRoute path="/helpwanted" component={HelpWantedPage}/> */}


              {/*remember to use react-router-dom <Switch> . . . </Switch> to navigate exclusively to another Class*/}
            </section>

            <Footer />

          </div>
        </Router>
    );
  }
}

export default App;