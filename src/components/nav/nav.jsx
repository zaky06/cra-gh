import React from "react";
import Li from "../li/li";
import Style from './nav.module.css';
import PropTypes from 'prop-types';


const Nav = ({nav}) => {
    Nav.propTypes = {
        name: PropTypes.string,
        id: PropTypes.number,
        nav: PropTypes.array
    };
    return (
            <ul className={Style.ul}>
            {nav.map((li) => {
              return (
                <Li key={li.id} name={li.name} img={li.img}/>
              )   
            })}
            </ul>
    );
}



export default Nav;