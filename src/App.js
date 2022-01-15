import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header";
import Main from "./components/main/main";
import "./App.css";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header header={props.store.header} />
      <Main className="main" users={props.store.users} />
    </div>
  );
};

export const usersType = PropTypes.arrayOf(
  PropTypes.shape({
    src: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  })
);

export const navType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    img: PropTypes.string,
  })
);

App.propTypes = {
  store: PropTypes.shape({
    header: { nav: navType, search: navType },
    users: usersType,
  }),
};

export default App;
