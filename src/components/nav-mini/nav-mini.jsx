import React from "react";
import style from "./nav-mini.module.css"
import PropTypes from 'prop-types';

const NavMini = (props) => {
    return(
            <ul className={style.ulHelper}>
                <li>
                    <a href="" className={style.aList}>
                        <span className={style.icon}>
                            <img src={props.nav.img} alt="" />
                        </span>
                        <p className={style.pHelper}>{props.nav.name}</p>
                    </a>
                </li>
            </ul>
    )
}

NavMini.propTypes = {
    nav: 
        PropTypes.shape({
            name: PropTypes.string,
            img: PropTypes.string,
        })
  };

export default NavMini;
