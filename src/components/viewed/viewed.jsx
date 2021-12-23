import React from "react";
import style from "./viewed.module.css"

const Viewed = () => {
    return (
        <div className={style.topJobs}>
            <div className={style.firstSection}>
                <h3 className={style.name}>Most Viewed This Week</h3>
                <svg className={style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>
            <div className={style.secondSection}>
                <p>Senoir Product Designer</p>
                <p>$25/hr</p>
            </div>
            <p className={style.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={style.secondSection}>
                <p>Senior UI / UX Designer</p>
                <p>$25/hr</p>
            </div>
            <p className={style.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className={style.secondSection}>
                <p>Junoir Seo Designer</p>
                <p>$25/hr</p>
            </div>
            <p className={style.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}

export default Viewed;