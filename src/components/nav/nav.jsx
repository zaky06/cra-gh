import React from "react";
import Item from "../item/item";
import style from './nav.module.css';
import PropTypes from 'prop-types';

const Nav = (props) => {
 
  return (
    <ul className={style.nav}>
      {props.nav.map((li) => {
        return (
          <Item key={li.id} name={li.name} img={li.img}/>
        )   
      })}
    </ul>
  );
}

Nav.propTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      img: PropTypes.string,
    })
  )
};

export default Nav;