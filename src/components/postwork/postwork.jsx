import React from "react";
import style from "./postwork.module.css";

const PostWork = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.postImg}>
                     <img src="https://gambolthemes.net/workwise-new/images/resources/user.png" alt="" />
                </div>
                <div className={style.flexrow}>
                    <a href="">Post a Project</a>
                    <a href="">Post a Job</a>
                </div>
            </div>
        </div>
    )
}

export default PostWork;