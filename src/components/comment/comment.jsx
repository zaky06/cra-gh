import React from "react";
import style from "./comment.module.css";
import { FaReplyAll } from 'react-icons/fa';
import PropTypes from "prop-types";

const Comment = (props) => {

    const date = new Date(props.comment.date * 1000);
    // Hours part from the timestamp
    const hours = date.getHours();
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    const seconds = "0" + date.getSeconds();
    // Will display time in 10:30:23 format
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return (
        <div className={style.comment}>
            <h5 className={style.commentName}>{props.comment.author}</h5>
            <span className={style.time}>
                <img src="https://gambolthemes.net/workwise-new/images/clock.png" alt="" />
                {formattedTime}
            </span>
            <p className={style.textComment}>{props.comment.content}</p>
            <button className={style.commentButton}>
                <FaReplyAll />
                <p className={style.textButton}>Reply</p>
            </button>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number,
        author: PropTypes.string,
        content: PropTypes.string,
        date: PropTypes.number,
        parent: PropTypes.number,
    })
}

export default Comment;