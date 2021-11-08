import { props } from 'bluebird';
import React from 'react';
import style from './dropdown.module.css';

const Dropdown = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    )
}

export default Dropdown;