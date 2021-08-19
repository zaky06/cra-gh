import React from "react";
import Header from "./components/header/header";
import "./App.css";
import PropTypes from 'prop-types';

export const navType = PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, img: PropTypes.string}))

const App = (props) => {
  
  return (
    <div className="app-wrapper">
      <Header header={props.store.header} />
    </div>
  );
};



App.propTypes = {
  store: PropTypes.shape({ header: {nav: navType} })
};

export default App;
