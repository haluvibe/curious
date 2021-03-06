import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./App.css";

const App = () => 
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Link to="/form">Form Page</Link>
    <Link to="/login">Login Page</Link>
  </div>
;

export default App;
