import React from "react";

export const FormBtn = props =>
  <button {...props} style={{marginBottom: 10 }} className="btn btn-success btn-md btn-block">
    {props.children}
  </button>;
