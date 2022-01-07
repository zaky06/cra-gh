import React from "react";
import style from "./actionpost.module.css";

// TODO Переименуй в ActionPost
const ActionPost = () => {
    return (
        <div className={style.container}>
            <div className={style.postImg}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/user-pic.png" alt="" />
            </div>
            <div className={style.buttons}>
              <button className={style.button1}>Post a Project</button>
              <button className={style.button2}>Post a Job</button>
            </div>
        </div>
    )
}

export default ActionPost;