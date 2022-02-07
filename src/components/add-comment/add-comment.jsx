import React from "react"; 
import style from "./add-comment.module.css";

const AddComment = () => {
    return (
        <form className={style.addcomment} action="">
            <fieldset className={style.wrapper}>
                <img className={style.img} src="https://gambolthemes.net/workwise-new/images/resources/bg-img4.png" alt="" />
                <input id="comment" placeholder="post a comment" type="text" className={style.comment} />
                <button className={style.button}>
                    <p>Send</p>
                </button>
            </fieldset>
        </form>
    )
}

export default AddComment;