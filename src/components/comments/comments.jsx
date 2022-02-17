import React, { useState } from "react";
import style from "./comments.module.css";
import Comment from "../comment/comment";
import PropTypes from "prop-types";
import { sortComments } from "./sortComments";
import AddComment from "../add-comment/add-comment";

const Comments = (props) => {
  // https://learn.javascript.ru/destructuring-assignment#destrukturizatsiya-obekta
  const { childComment } = style;
  const [comments, setComments] = useState(props.comments);

  const postComment = (commentText) => {
    const comment = {
      id: comments.length + 1,
      author: "Lilian Johnson",
      content: commentText,
      date: 1396098802,
    };
    setComments([...comments, comment]);
  };

  return (
    <div className={style.comments}>
      {sortComments(comments).map((comment) => {
        return (
          <div
            key={comment.id}
            className={comment.parent ? childComment : null}
          >
            <Comment comment={comment} />
          </div>
        );
      })}
      <AddComment postComment={postComment} />
    </div>
  );
};

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
};

export default Comments;
