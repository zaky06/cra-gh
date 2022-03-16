import React from "react";
import style from "./nav-mini.module.css"
const NavMini = () => {
    return(
        <div className={style.navMini}>
            <ul>
                <li>
                    <a href="">
                        <span>
                            <img src="https://gambolthemes.net/workwise-new/images/icon1.png" alt="" />
                        </span>
                        Home
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavMini;