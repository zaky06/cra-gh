import React from "react";
import style from "./copyright.module.css"

const Copyright = () => {
    return (
        <div className={style.copyright}>
          <ul>
            <div className={style.rowSection}>
              <li className={style.addBorder}>
                 <a href="">Help Center</a>
              </li>
              <li className={style.addBorder}>
                 <a href="">About</a>
              </li>
              <li>
                 <a href="">Privacy Policy</a> 
              </li>
            </div>
            <div className={style.rowSection}>
              <li className={style.addBorder}>
                 <a href="">Community Guidelines</a> 
              </li>
              <li>
                 <a href="">Cookies Policy</a>     
              </li>
            </div>
            <div className={style.rowSection}>
              <li className={style.addBorder}>
                 <a href="">Career</a>
              </li>
              <li className={style.addBorder}>
                 <a href="">Language</a>
              </li>
              <li>
                 <a href="">Copyright Policy</a>
              </li>
            </div>
          </ul>
          <div className={style.rowLast}>
            <img src="https://gambolthemes.net/workwise-new/images/logo2.png" alt="" />
            <p>
              <img src="https://gambolthemes.net/workwise-new/images/cp.png" alt="" />
              Copyright 2021
            </p>
          </div>
        </div>
    )
}

export default Copyright;