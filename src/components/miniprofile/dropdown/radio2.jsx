// import React, { useState } from "react"
import React from "react";
import style from "./dropdown.module.css" 

const Demo2 = () => {

    // const [formData, setformData] = useState({
    //     status: "",
    // })
    // const handleChange = event => {

    // }

    return (
        <form action="">
            <ul className={style.onOffStatus}>
              <li>
                  <div className={style.fgtSec}>
                      <input type="radio" value="Online"  name="status"/> 
                      <label >
                        <span>

                        </span>
                      </label>
                      <small>Online</small>
                  </div>
              </li>
              <li>
                  <div className={style.fgtSec}>
                      <input type="radio" value="Offline"  name="status" /> 
                      <label >
                        <span>

                        </span>
                      </label>
                      <small>Offline</small>
                  </div>
              </li>
          </ul>
        </form>
        
    )

}

export default Demo2;