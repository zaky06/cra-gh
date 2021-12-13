import React from "react";
import style from "./actionpost.module.css";
import { Button } from "react-bootstrap";

// TODO Переименуй в ActionPost
const ActionPost = () => {
    return (
        <div className={style.container}>
            <div className={style.postImg}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/user.png" alt="" />
            </div>
            <div className={style.buttons}>
              <Button variant="danger" disabled>Danger</Button>
              <Button variant="danger">Danger</Button>
            </div>
        </div>
    )
}

export default ActionPost;