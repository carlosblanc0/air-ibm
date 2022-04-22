import React from "react";

import Router from "./routes";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="company logo" />
      <div className="content">
        <Router />
      </div>
    </div>
  );
}

export default App;
