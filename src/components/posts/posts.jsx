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

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      rank: PropTypes.string,
      location: PropTypes.string,
      position: PropTypes.string,
      description: PropTypes.string,
      salary: PropTypes.string,
      isAvaible: PropTypes.bool,
      src: PropTypes.string,
      likes: PropTypes.number,
      views: PropTypes.number,
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
  )
}

export default Posts;