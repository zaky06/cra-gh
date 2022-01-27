import React from "react";
import style from "./comments.module.css";
import Comment from "../comment/comment";
import PropTypes from "prop-types";

const Comments = (props) => {

    return (
        <div className={style.comments}>
            {
                props.comments.map((comment) => {
                  return (
                    <div key={comment.id}>
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