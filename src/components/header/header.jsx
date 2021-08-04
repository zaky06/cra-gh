import React from "react";
import Style from './Header.module.css';
import Stil from './Logo.module.css';
import Con from './Container.module.css';
import Nav from "./Nav/Nav";

const Header = (props) => {
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
