import React from "react";
import style from "./actionpost.module.css";
import { Button } from "react-bootstrap";

// TODO Переименуй в ActionPost
const ActionPost = () => {
    return (
        <div className={style.container}>
            <div className={style.postImg}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/user-pic.png" alt="" />
            </div>
            <div className={style.button1}>
              <Button variant="danger" disabled>Post a Project</Button>
            </div>
            <div className={style.button2}>
              <Button variant="danger">Post a Job</Button>
            </div>
        </div>
    )
}

export default ActionPost;