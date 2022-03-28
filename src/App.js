import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Main from "./components/main";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Main
        className="main"
      />
    </div>
  );
};

export default App;
