import React from "react";
import Item from "../item/item";
import style from './nav.module.css';
import PropTypes from 'prop-types';



const Nav = ({nav}) => {

    return (
            <ul className={style.nav}>
            {nav.map((li) => {
              return (
                <Item key={li.id} name={li.name} img={li.img}/>
              )   
            })}
            </ul>
    );
}


Nav.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  nav: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, img: PropTypes.string}))
};

export default Nav;