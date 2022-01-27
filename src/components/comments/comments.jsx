import React from "react";
import style from "./comments.module.css";
import Comment from "../comment/comment";
// import PropTypes from "prop-types";

const Comments = () => {
    return (
        <div className={style.comments}>
            <Comment />
        </div>
    )
}

export default Comments;