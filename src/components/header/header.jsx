import React from "react";
import logo from "../../logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn the React
      </a>
    </header>
  );
}

export default Header;
