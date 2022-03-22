import React from "react";
import style from "./signup.module.css"

const SignUp = () => {
    return (
        <div className={style.signup}>
            <img src="https://gambolthemes.net/workwise-new/images/wd-logo.png" alt="" />
            <h3 className={style.name}>Track Time on Workwise</h3>
            <p className={style.ob}>Pay only for the Hours worked</p>
            <div className={style.border}>
                <h3 className={style.name1}>SIGN UP</h3>
                <a href="">Learn More</a>
            </div>
        </div>
    )
}

export default SignUp;