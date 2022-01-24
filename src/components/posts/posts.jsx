import React from "react";
import PropTypes from "prop-types";
import Post from "../post/post";
import style from "./posts.module.css"


const Posts = (props) => {
    return (
        <div className={style.posts}>
            {
              props.posts.map((post, index) => {
                return (
                  <div key={index}>
                    <Post post={post} />
                  </div>
                )
              }) 
            }
        </div>
    )
}

const postsType = PropTypes.arrayOf(
  PropTypes.shape({
    name: PropTypes.string,
    rank: PropTypes.string,
    location: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
    salary: PropTypes.string,
    isAvaible: PropTypes.bool,
    src: PropTypes.string,
  })
);

Posts.propTypes = {
  posts: postsType
}

export default Posts;