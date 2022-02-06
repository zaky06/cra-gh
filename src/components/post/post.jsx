import React, { useState } from "react";
import style from "./post.module.css";
import PropTypes from "prop-types";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsChatLeftFill } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import Comments from "../comments";

const Post = (props) => {
  const numberComments = props.post.comments.length;
  const [isCommentsOpened, setIsCommentsOpened] = useState(false);
  function commentsToggle() {
    setIsCommentsOpened(!isCommentsOpened);
  }
  const { statusBar, statusBarBorder } = style;

  return (
    <div className={style.topJobs}>
      <div className={style.firstSection}>
        <div className={style.wrapper}>
          <img className={style.imgIcon} src={props.post.src} alt="" />
          <div>
            <h3 className={style.name}>{props.post.name}</h3>
            <span className={style.statusTime}>
              <img
                src="https://gambolthemes.net/workwise-new/images/clock.png"
                alt=""
              />
              3 min ago
            </span>
          </div>
        </div>
        <svg
          className={style.iconSvg}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      </div>
      <div className={style.wrapper2}>
        <div className={style.secondSection}>
          <span className={style.statusTime}>
            <img
              src="https://gambolthemes.net/workwise-new/images/icon8.png"
              alt=""
            />
            {props.post.rank}
          </span>
          <span className={style.statusTime}>
            <img
              src="https://gambolthemes.net/workwise-new/images/icon9.png"
              alt=""
            />
            {props.post.location}
          </span>
        </div>
        <div className={style.wrapper}>
          <i>
            <button className={style.firColor}>
              <BsFillBookmarkFill />
            </button>
          </i>
          <i className={style.dvigenie}>
            <button className={style.secColor}>
              <BsEnvelope />
            </button>
          </i>
          {props.post.isAvailable ? (
            <div className={style.bid}>
              <a href="">Bid Now</a>
            </div>
          ) : null}
        </div>
      </div>
      <h4>{props.post.position}</h4>
      <div className={style.wrapper}>
        <div className={style.timeJob}>
          <a href="">Full Time</a>
        </div>
        <div className={style.cash}>
          <p>{props.post.salary}</p>
        </div>
      </div>
      <div className={style.lorem}>
        <p>{props.post.description}</p>
        <a href="">view more</a>
      </div>
      <ul className={style.skills}>
        <li>
          <a href="">HTML</a>
        </li>
        <li>
          <a href="">PHP</a>
        </li>
        <li>
          <a href="">CSS</a>
        </li>
        <li>
          <a href="">JavaScript</a>
        </li>
        <li>
          <a href="">Wordpress</a>
        </li>
      </ul>
      <div
        className={
          isCommentsOpened ? statusBar + " " + statusBarBorder : statusBar
        }
      >
        <div className={style.wrapper3}>
          <span>
            <button className={style.likeButton}>
              <BsSuitHeartFill />
              <p>Like</p>
            </button>
          </span>
          <img
            src="https://gambolthemes.net/workwise-new/images/liked-img.png"
            alt=""
          />
          <span className={style.numberLike}>{props.post.likes}</span>
          <span onClick={commentsToggle}>
            <button className={style.likeButton}>
              <BsChatLeftFill />
              <p>Comments {numberComments}</p>
            </button>
          </span>
        </div>
        <div className={style.wrapper3}>
          <span className={style.likeButton}>
            <BsEyeFill />
            <p>Views {props.post.views}</p>
          </span>
        </div>
      </div>
      {isCommentsOpened && <Comments comments={props.post.comments} />}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string,
    rank: PropTypes.string,
    location: PropTypes.string,
    position: PropTypes.string,
    description: PropTypes.string,
    salary: PropTypes.string,
    isAvailable: PropTypes.bool,
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
  }),
};

export default Post;
