import React from "react";
import style from './profilelist.module.css';

const Profilelist = () => {
    return (
        <div className={style.list}>
            <svg viewBox="0 0 100 80" width="25" height="25">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
            </svg>
        </div>
    )
}

export default Profilelist; 

// <img className={style.img} src="https://icons-for-free.com/iconfiles/png/512/list+24px-131985192702419913.png" alt="" />
