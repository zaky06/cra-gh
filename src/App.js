import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
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
