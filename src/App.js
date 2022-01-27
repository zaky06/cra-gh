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
      <Main
        className="main"
        users={props.store.users}
        jobs={props.store.jobs}
        posts={props.store.posts}
      />
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

export const jobsType = PropTypes.arrayOf(
  PropTypes.shape({
    position: PropTypes.string,
    description: PropTypes.string,
    salary: PropTypes.string,
    url: PropTypes.string,
  })
);

export const postsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    rank: PropTypes.string,
    location: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
    salary: PropTypes.string,
    isAvailable: PropTypes.bool,
    src: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        author: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.number,
        parent: PropTypes.number,
      })
    ),
  })
);

App.propTypes = {
  store: PropTypes.shape({
    header: { nav: navType, search: navType },
    users: usersType,
    jobs: jobsType,
    posts: postsType,
  }),
};

export default App;
