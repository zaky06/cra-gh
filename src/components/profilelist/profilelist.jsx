import React from "react";
import style from './profilelist.module.css';
import NavMini from "../nav-mini/nav-mini";
import { useState } from "react";

const Profilelist = () => {
    const [isNavOpened, setIsNavOpened] = useState(false);

    function menuToggle() {
        setIsNavOpened(!isNavOpened);
    }
    return (
        <div className={style.list} onClick={menuToggle}>
            <svg viewBox="0 0 100 80" width="25" height="25">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
            </svg>
            {isNavOpened && <NavMini />}
        </div>
    )
}

export default Profilelist; 

// <img className={style.img} src="https://icons-for-free.com/iconfiles/png/512/list+24px-131985192702419913.png" alt="" />
