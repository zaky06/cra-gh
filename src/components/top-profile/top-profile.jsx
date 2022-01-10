import React from "react";
import style from "./top-profile.module.css";
import { BsEnvelope } from 'react-icons/bs';
import PropTypes from "prop-types";

const TopProfile = (props) => {
    console.log(props.users)
    return (
        <div className={style.placeholder}>
            <div className={style.profileImg}>
                  <img src={props.users.src} alt="" />
            </div>
            <p>{props.users.name}</p>
            <span>{props.users.description}</span>
            <div className={style.wrapper}>
                <button className={style.colorButton}>Follow</button>
                <button className={style.secColor}>
                    <BsEnvelope />
                </button>
                <button className={style.blueButton}>Hire</button>
            </div>
            <button className={style.lastButton}>View Profile</button>
        </div>
    )
}

const usersType = PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  );

TopProfile.PropTypes = {
    users: usersType
};

export default TopProfile;