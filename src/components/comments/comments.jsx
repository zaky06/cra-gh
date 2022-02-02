import React from "react";
import style from "./comments.module.css";
import Comment from "../comment/comment";
import PropTypes from "prop-types";
import { sortComments } from './sortComments';

const Comments = (props) => {
  sortComments(props.comments);

  // https://learn.javascript.ru/destructuring-assignment#destrukturizatsiya-obekta
  const { childComment } = style;

  return (
      <div className={style.comments}>
          {
              sortComments(props.comments).map((comment) => {
                return (
                  <div key={comment.id} className={comment.parent ? childComment : null} >
                      <Comment comment={comment} />
                  </div>
                )
              })
          }
      </div>
  )
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          author: PropTypes.string,
          content: PropTypes.string,
          date: PropTypes.number,
          parent: PropTypes.number,
        })
      ),
}

export default Comments;