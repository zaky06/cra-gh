import React from "react";
import style from "./topprofiles.module.css"

const TopProfiles = () => {
    return (
        <div className={style.topProfiles}>
            <div className={style.firstSection}>
                <h3 className={style.name}>Top Profiles</h3>
                <svg className={style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>
        </div>
    )
}

export default TopProfiles;