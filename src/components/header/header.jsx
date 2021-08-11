import React from "react";
import Style from './header.module.css';
import Stil from './logo.module.css';
import Con from './container.module.css';
import Nav from "../nav/nav";
import PropTypes from 'prop-types';

const Header = (props) => {
  Header.propTypes = {
    header: PropTypes.string,
    nav: PropTypes.string
  };
    return (
        <header className={Style.header}>
        <div className={Con.container} >
          <div className={Stil.logo}>
            <img src="https://gambolthemes.net/workwise-new/images/logo.png" />
          </div>
          <Nav nav={props.header.nav}/>
        </div>
      </header>
    );

    
}




export default Header;
