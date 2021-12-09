import React from "react";
// import PostWork from "../postwork/postwork";
import ProfileInfo from "../profileinfo/profileinfo";
import style from "./main.module.css";

const Main = () => {
    return (
        <div className={style.main}>
            <ProfileInfo />
            {/* <PostWork /> */}
        </div>
    )
}

export default Main;