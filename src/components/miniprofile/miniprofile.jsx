import React from "react";
import style from './miniprofile.module.css';

const Miniprofile = () => {
    return (
        <div className={style.divv}>
            <img className={style.avatar} src="https://gambolthemes.net/workwise-new/images/resources/user.png"/>
            <a className={style.name} href="#">John</a>
            <span>
                <img className={style.icon} src="https://icon-library.com/images/drop-down-arrow-icon/drop-down-arrow-icon-25.jpg"/>
            </span>
        </div>
    )
}

export default Miniprofile;