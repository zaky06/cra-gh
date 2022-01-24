import React from "react";
import PropTypes from "prop-types";
import Post from "../post/post";


const Posts = (props) => {
    return (
        <div>
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
    })
);

Posts.PropTypes = {
    posts: postsType
}

export default Posts;