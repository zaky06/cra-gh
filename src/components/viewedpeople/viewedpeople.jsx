import React from "react";
import style from "./viewedpeople.module.css";


const ViewedPeople = () => {
    return (
        <div className={style.suggestions}>
            <div className={style.firstSection}>
                <h3 className={style.name}>Most Viewed People</h3>
                <svg className={style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>
            <div className={style.secondSection}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/s1.png" alt="" />
                <div className={style.nameAndJob}>
                    <h4>Jessica William</h4>
                    <p>Graphic Designer</p>
                </div>
            </div>
            <div className={style.secondSection}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/s2.png" alt="" />
                <div className={style.nameAndJob}>
                    <h4>John Doe</h4>
                    <p>PHP Developer</p>
                </div>
                <span></span>
            </div>
            <div className={style.secondSection}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/s3.png" alt="" />
                <div className={style.nameAndJob}>
                    <h4>Poonam</h4>
                    <p>Wordpress Developer</p>
                </div>
                <span></span>
            </div>
            <div className={style.secondSection}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/s3.png" alt="" />
                <div className={style.nameAndJob}>
                    <h4>Bill Gates</h4>
                    <p>C / C++ Developer</p>
                </div>
                <span></span>
            </div>
            <div className={style.secondSection}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/s5.png" alt="" />
                <div className={style.nameAndJob}>
                    <h4>Jessica William</h4>
                    <p>Graphic Designer</p>
                </div>
                <span></span>
            </div>
            <div className={style.secondSection}>
                <img src="https://gambolthemes.net/workwise-new/images/resources/s6.png" alt="" />
                <div className={style.nameAndJob}>
                    <h4>John Doe</h4>
                    <p>PHP Developer</p>
                </div>
                <span></span>
            </div>
            <a href="">View More</a>
        </div>
    )
}

export default ViewedPeople;