import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ margin:"auto", width: 400, clear: 'both' }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
