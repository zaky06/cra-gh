import React from "react";
import style from './item.module.css';
import PropTypes from 'prop-types';

const Item = (props) => {

    return (
        <li className={style.item}>
            <a className={style.link} href="">
                <img className={style.image} src={props.img}/>
                <span className={style.title}>
                  {props.name}
                </span>
            </a>
        </li>
    );
}

Item.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string
};

export default Item;