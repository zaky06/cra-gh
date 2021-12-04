import React from "react";
import ProfileInfo from "../profileinfo/profileinfo";
import style from "./main.module.css";

const Main = () => {
    return (
        <div className={style.mainn}>
            <ProfileInfo />
        </div>
    )
}

export default Main;