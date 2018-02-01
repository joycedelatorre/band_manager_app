import React from "react";
import "./Gapi.css";
// import "./GoogleApi.js";



export const Gapi = props =>

	<button {...props} className="btn btn-success btn-md btn-block authorizeButton">Authorize Youtube Account
    {props.children}
  </button>;
