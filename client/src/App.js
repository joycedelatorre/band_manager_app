// import React, { Component } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
// import axios from 'axios';
import './App.css';

import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

import Login from './pages/Login';
import Page1 from './pages/Pages/Page1';
import Page2 from './pages/Pages/Page2';
import Page3 from './pages/Pages/Page3';
import Band from './pages/Pages/Band';

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
        </Switch>
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
