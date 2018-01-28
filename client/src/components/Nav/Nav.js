import React from "react";
import "./Nav.css";

export const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">

        <div id="cssSelector">
          <div className="line">
            <div className="square el">Test</div>
          </div>
        </div>


        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          React Reading List
        </a>
      </div>
    </div>
  </nav>;

