import React from "react";
import style from './profilelist.module.css';
import { useState } from "react";
import PropTypes from 'prop-types';
import NavMiniTool from "../nav-mini-tool";

const Profilelist = (props) => {
    const [isNavOpened, setIsNavOpened] = useState(false);

    function menuToggle() {
        setIsNavOpened(!isNavOpened);
    }
    return (
        <div className={style.list} onClick={menuToggle}>
            <svg viewBox="0 0 100 80" width="25" height="25">
                <rect width="100" height="15"></rect>
                <rect y="30" width="100" height="15"></rect>
                <rect y="60" width="100" height="15"></rect>
            </svg>
            {isNavOpened && <NavMiniTool nav={props.nav} />}
        </div>
    )
}

Profilelist.propTypes = {
      nav: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          img: PropTypes.string,
        })
      ),
  };


export default Profilelist; 

// <img className={style.img} src="https://icons-for-free.com/iconfiles/png/512/list+24px-131985192702419913.png" alt="" />
