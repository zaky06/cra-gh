import React from "react";
import PropTypes from "prop-types";
import style from "./suggestions.module.css";
import { Button } from "react-bootstrap";

const Suggestions = (props) => {

    const users = props.users.map(((user, index) => {
        return ( 
            <div key={index} className={style.secondSection}>
                <div className={style.information}>
                    <img src={user.src} alt="" />
                    <div className={style.nameAndJob}>
                        <h4>{user.name}</h4>
                        <p>{user.description}</p>
                    </div>
                </div>
                <div>
                    <Button size="sm" className={style.button} variant="outline-danger">+</Button>
                </div>
            </div>
            )
        }  
    ))

    return (
        <div className={style.suggestions}>
            <div className={style.firstSection}>
                <h3 className={style.name}>Suggestions</h3>
                <svg className={style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>

            {users}
            <a href="">View More</a>
        </div>
    )
}

const usersType = PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    })
  );

Suggestions.propTypes = {
    users: usersType
}

export default Suggestions;

