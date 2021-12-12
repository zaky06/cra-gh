import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import "./App.css";

export const navType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
  })
);

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header header={props.store.header} />
      <Main className="main" />
    </div>
  );
};

App.propTypes = {
  store: PropTypes.shape({ header: { nav: navType, search: navType } }),
};

export default App;
