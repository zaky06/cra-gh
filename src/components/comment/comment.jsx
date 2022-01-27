import React from "react";
import style from "./comment.module.css";
import { FaReplyAll } from 'react-icons/fa';
// import PropTypes from "prop-types";

const Comment = () => {
    return (
        <div className={style.comment}>
            <h5 className={style.commentName}>John Doe</h5>
            <span className={style.time}>
                <img src="https://gambolthemes.net/workwise-new/images/clock.png" alt="" />
                3 min ago
            </span>
            <p className={style.textComment}>Lorem ipsum dolor sit amet,</p>
            <button className={style.commentButton}>
                <FaReplyAll />
                <p className={style.textButton}>Reply</p>
            </button>
        </div>
    )
}

export default Comment;