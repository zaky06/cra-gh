import React from "react";
import style from './styles.module.css';
import Nav from "../nav/nav";
import PropTypes from 'prop-types';
import Search from "../search/search";
import Miniprofile from "../miniprofile/miniprofile";
import Profilelist from "../profilelist/profilelist";


const Header = (props) => {

    console.log(props.header)

    return (
      <header className={style.header}>
        <div className={style.container} >
          <div className={style.left}>
            <img className={style.logo} src="https://gambolthemes.net/workwise-new/images/logo.png" />
            <Search iconSrc={props.header.search.iconSrc} placeholder={"Search..."}/>
          </div>
          <div className={style.right}>
            <Nav nav={props.header.nav}/>
            <Miniprofile />
            <Profilelist />
          </div>
        </div>
      </header>
    );

    
}


Header.propTypes = {
  header: PropTypes.shape({nav: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, img: PropTypes.string})),
  search: PropTypes.shape({iconSrc: PropTypes.string})})
};




export default Header;
