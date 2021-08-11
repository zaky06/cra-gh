import React from "react";
import Header from "./components/header/header";
import "./App.css";
import PropTypes from 'prop-types';

const App = (props) => {
  App.propTypes = {
    store: PropTypes.array,
    header: PropTypes.string
  };
  return (
    <div className="app-wrapper">
      <Header header={props.store.header} />
    </div>
  );
};

export default App;
