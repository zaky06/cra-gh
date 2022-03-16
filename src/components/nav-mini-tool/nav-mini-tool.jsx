import React from "react";
import style from "./nav-mini-tool.module.css"
import NavMini from "../nav-mini/nav-mini";
import PropTypes from "prop-types";

const NavMiniTool = (props) => {
    return (
        <div className={style.navMiniTool}>
            {
                props.nav.map((nav, id) => {
                    return (
                        <div key={id}>
                            <NavMini nav={nav} />
                        </div>
                    )
                })
            }
        </div>
    )
}

NavMiniTool.propTypes = {
    nav: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            img: PropTypes.string,
        }))
  };

export default NavMiniTool;