import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./add-comment.module.css";

const AddComment = (props) => {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.postComment(comment);
  };

  return (
    <form onSubmit={handleSubmit} className={style.addcomment}>
      <fieldset className={style.wrapper}>
        <img
          className={style.img}
          src="https://gambolthemes.net/workwise-new/images/resources/bg-img4.png"
          alt=""
        />
        <input
          onChange={handleChange}
          value={comment}
          id="comment"
          placeholder="post a comment"
          type="text"
          className={style.comment}
        />
        <input className={style.send} value="Send" type="submit" />
      </fieldset>
    </form>
  );
};

AddComment.propTypes = {
  postComment: PropTypes.func,
};

export default AddComment;
