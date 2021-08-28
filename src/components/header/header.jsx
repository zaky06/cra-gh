import React from "react";
import style from './styles.module.css';
import Nav from "../nav/nav";
import PropTypes from 'prop-types';
import Search from "../search/search";
import Miniprofile from "../miniprofile/miniprofile";


const Header = (props) => {
    return (
        <header className={style.header}>
        <div className={style.container} >
          <div className={style.logo}>
            <img src="https://gambolthemes.net/workwise-new/images/logo.png" />
          </div>
          <Search  search={props.header.search}/>
          <Nav nav={props.header.nav}/>
          <Miniprofile />
        </div>
      </header>
    );

    
}


Header.propTypes = {
  header: PropTypes.shape({nav: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, img: PropTypes.string})),
  search: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string, img: PropTypes.string}))})
};




export default Header;
