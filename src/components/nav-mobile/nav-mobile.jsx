import React from "react";
import style from "./nav-mobile.module.css"
import NavMobileItem from "./nav-mobile-item";
import PropTypes from 'prop-types';

const NavMobile = (props) => {
  return (
    <div className={style.navMiniTool}>
      {
        props.nav.map((nav, id) => {
          return (
            <div key={id}>
              <NavMobileItem nav={nav} />
            </div>
          )
        })
      }
    </div>
  )
}

NavMobile.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
    })
  )
};

export default NavMobile;