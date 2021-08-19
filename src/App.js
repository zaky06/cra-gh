import React from "react";
import PropTypes from 'prop-types';
import Header from "./components/header/header";
import "./App.css";


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
