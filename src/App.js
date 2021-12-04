import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import "./App.css";
import PropTypes from 'prop-types';

export const navType = PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, img: PropTypes.string}))

const App = (props) => {
  
  return (
    <div className="app-wrapper">
      <Header header={props.store.header} />
      <Main />
    </div>
  );
};



App.propTypes = {
  store: PropTypes.shape({ header: {nav: navType, search: navType} })
};

export default App;
