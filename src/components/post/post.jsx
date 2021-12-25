import React from "react";
import style from "./post.module.css";



const Post = () => {
    return (
        <div className={style.topJobs}>
            <div className={style.firstSection}>
                <div className={style.wrapper}>
                    <img className={style.imgIcon} src="https://gambolthemes.net/workwise-new/images/resources/user-pic.png" alt="" />
                    <div>
                    <h3 className={style.name}>John Doe</h3>
                    <span className={style.statusTime}>
                        <img src="https://gambolthemes.net/workwise-new/images/clock.png" alt="" />
                        3 min ago
                    </span>
                    </div>
                </div>
                <svg className={style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>
            <div className={style.wrapper2}>
                <div className={style.secondSection}>
                    <span className={style.statusTime}>
                        <img src="https://gambolthemes.net/workwise-new/images/icon8.png" alt="" />
                        Epic Coder
                    </span>
                    <span className={style.statusTime}>
                        <img src="https://gambolthemes.net/workwise-new/images/icon9.png" alt="" />
                        India
                    </span>
                </div>
                <div className={style.wrapper}>
                    <i></i>
                    <i></i>
                </div>
            </div>
            <h4>Senior Wordpress Developer</h4>
            <div className={style.wrapper}>
                <div className={style.timeJob}>
                    <a href="">Full Time</a>
                </div>
                <div className={style.cash}>
                    <p>$30 / hr</p>
                </div>
            </div>
            <div className={style.lorem}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...</p>
                <a href="">view more</a>
            </div>
            <ul className={style.skills}>
                <li>
                    <a href="">HTML</a>
                </li>
                <li>
                    <a href="">PHP</a>
                </li>
                <li>
                    <a href="">CSS</a>
                </li>
                <li>
                    <a href="">JavaScript</a>
                </li>
                <li>
                    <a href="">Wordpress</a>
                </li>
            </ul>
            <div className={style.statusBar}>
                <ul className={style.like}>
                    <li>
                        <a href="">
                            <i className={style.block}>....</i>
                            Like
                        </a>
                        <img src="https://gambolthemes.net/workwise-new/images/liked-img.png" alt="" />
                        <span>25</span>
                    </li>
                    <li>
                       <a href="">
                            <i className={style.block}>....</i>  
                            Comment 15 
                        </a> 
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Post;