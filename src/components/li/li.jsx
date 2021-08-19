import React from "react";
import style from './li.module.css';
import PropTypes from 'prop-types';

const Li = (props) => {

    
    console.log(props);
    return (
            <li className={style.li}>
                <a href="">
                    <span>
                        <img src={props.img}/>
                    </span>
                    <p>
                        {props.name}
                    </p>
                </a>
            </li>
    );
}

Li.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string
};

export default Li;