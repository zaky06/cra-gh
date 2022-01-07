import React from "react";
import style from "./top-profile.module.css";
import { BsEnvelope } from 'react-icons/bs';

const TopProfile = () => {
    return (
        <div className={style.placeholder}>
            <div className={style.profileImg}>
                  <img src="https://gambolthemes.net/workwise-new/images/resources/user3.png" alt="" />
            </div>
            <p>John Doe</p>
            <span>Graphic Designer</span>
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

export default TopProfile;