import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

let i = 0;

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Band Manager
        </Link>
      </div>
      <ul className="nav navbar-nav">
      {
        props.children.map(args => (
          <li key={i++} className={window.location.pathname === args.path ? "active": ""}>
            <Link to={args.path}>{args.name}</Link>
          </li>
        ))
      }
      </ul>
    </div>
  </nav>;

export default Navbar;