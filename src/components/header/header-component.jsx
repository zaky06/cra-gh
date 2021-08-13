import React from "react";
import style from './header.module.css';
import stil from './logo.module.css';
import Con from './container.module.css';
import Nav from "../nav/nav";
import PropTypes from 'prop-types';

const Header = (props) => {
  Header.propTypes = {
    header: PropTypes.string,
    nav: PropTypes.string
  };
    return (
        <header className={style.header}>
        <div className={Con.container} >
          <div className={stil.logo}>
            <img src="https://gambolthemes.net/workwise-new/images/logo.png" />
          </div>
          <Nav nav={props.header.nav}/>
        </div>
      </header>
    );

    
}




export default Header;
