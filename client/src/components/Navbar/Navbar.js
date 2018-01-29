import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Band Manager
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/login"
              ? "active"
              : ""
          }
        >
          <Link to="/">Login</Link>
        </li>
        <li className={window.location.pathname === "/page1" ? "active" : ""}>
          <Link to="/page1">About</Link>
        </li>
        <li className={window.location.pathname === "/page2" ? "active" : ""}>
          <Link to="/page2">How To</Link>
        </li>
        <li className={window.location.pathname === "/page3" ? "active" : ""}>
          <Link to="/page3">Test Help Wanted</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
