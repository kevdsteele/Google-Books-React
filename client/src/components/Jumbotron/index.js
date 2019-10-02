import React from "react";
import "./index.css"

function Jumbotron({ children }) {
  return (
    <div
      
      className="jumbotron"
    >
      <h1>Google Books React Application</h1>
      <h3>Search for and Save Books of Interest</h3>
      {children}
    </div>
  );
}

export default Jumbotron;
