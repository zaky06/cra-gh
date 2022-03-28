import React from "react";
import PropTypes from "prop-types";
import style from "./add-friend.module.css";
import { Button } from "react-bootstrap";
import { AiOutlinePlus } from 'react-icons/ai';

const AddFriend = (props) => {



    const users = props.users.map((user, index) => {
        return ( 
            <div key={index} className={style.secondSection}>
                <div className={style.information}>
                    <img src={user.src} alt="" />
                    <div className={style.nameAndJob}>
                        <h4>{user.name}</h4>
                        <p>{user.description}</p>
                    </div>
                </div>
                <div className={style.buttonPosition}>
                    <Button size="sm" className={style.button} variant="outline-danger"><AiOutlinePlus/></Button>
                </div>
            </div>
            )
        }  
    )

    return (
        <div className={style.addFriend}>
            <div className={style.firstSection}>
                <h3 className={style.name}>{props.title}</h3>
                <svg className={style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>
            {users}
            <a href="">View More</a>
        </div>
    )
}

AddFriend.propTypes = {
    title: PropTypes.string,
    users: PropTypes.arrayOf(
    PropTypes.shape({  
        src: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
       })
    )
}

export default AddFriend;

