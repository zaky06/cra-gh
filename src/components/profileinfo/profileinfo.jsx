import React from "react";
import style from "./profileinfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={style.user}>
            <div className={style.bg}>
            <div className={style.firstS}>
                <div className={style.imgUser}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/user-pic.png"/>
                </div>
                <div className={style.secondS}>
                <h2 className={style.name}>
                    John Doe
                </h2>
                <h4 className={style.ob}>
                    Graphic Designer at Self Employed
                </h4>
            </div>
            </div>
            <ul className={style.userStatus}>
                <li className={style.userStatusItem}>
                    <h3>Following</h3>
                    <span>34</span>
                </li>
                <li className={style.userStatusItem}>
                    <h3>Followers</h3>
                    <span>155</span>
                </li>
                <li className={style.userStatusItem}>
                    <a href="">View Profile</a>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default ProfileInfo;