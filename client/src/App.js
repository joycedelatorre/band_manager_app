import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import { Band, Login, Page1, Page2, Page3 } from './pages';

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/page1" component={Page1} />
          <Route exact path="/page2" component={Page2} />
          <Route exact path="/page3" component={Page3} />
          <Route exact path="/band/:id" component={Band} />

          <Route exact path="/login2" />
        </Switch>
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
