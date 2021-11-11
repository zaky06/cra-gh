import React from "react";
import style from './miniprofile.module.css';
import Dropdown from "./dropdown/dropdown";

const Miniprofile = () => {
    return (
        <div className={style.container}>
            <img className={style.avatar} src="https://gambolthemes.net/workwise-new/images/resources/user.png"/>
            <a className={style.name} href="#">John</a>
            <Dropdown />
        </div>
    )
}

// Miniprofile.propTypes = {
//     avatarSrc: PropTypes.string,
//     iconSrc: PropTypes.string
// };

export default Miniprofile;