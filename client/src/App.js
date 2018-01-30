import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css'; // test this . . . change some values in App.css to see if it's being implemented in the page render

import Background from "./components/Background/image/image.jpg";
import Footer from './components/Footer';

import HomePage from './components/HomePage.jsx';

import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';

import TestPage from './containers/TestPage.jsx';

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
  position: "absolute"
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
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <Link className="navbar-brand" to="/">
                    Band Manager
                  </Link>
                </div>
                {this.state.authenticated ? (
                  <ul className="nav navbar-nav">
                    <li className={window.location.pathname === "/dashboard" ? "active": ""}>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className={window.location.pathname === "/test" ? "active": ""}>
                      <Link to="/test">Test</Link>
                    </li>
                    <li className={window.location.pathname === "/logout" ? "active" : ""}>
                      <Link to="/logout">Log out</Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav navbar-nav">
                    <li className={window.location.pathname === "/login" ? "active": ""}>
                      <Link to="/login">Log in</Link>
                    </li>
                    <li className={window.location.pathname === "/signup" ? "active" : ""}>
                      <Link to="/signup">Sign up</Link>
                    </li>
                  </ul>
                )}
              </div>
            </nav>

            <section>
              <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
              <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
              <LoggedOutRoute path="/signup" component={SignUpPage} />
              <Route path="/logout" component={LogoutFunction} />

              <PrivateRoute path="/dashboard" component={DashboardPage} />
              <PrivateRoute path="/test" component={TestPage} />

              {/*remember to use react-router-dom <Switch> . . . </Switch> to navigate exclusively to another Class*/}
            </section>

            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;