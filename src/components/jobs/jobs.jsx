import React from "react";
import PropTypes from "prop-types";
import style from "./jobs.module.css";

const Jobs = (props) => {

    const posts = props.jobs.map((user, index) => {
        return (
            <div key={index}>
                <div className={style.secondSection}>
                    <p>{user.position}</p>
                    <p>{user.salary}</p>
                </div>
                <p className={style.info}>{user.description}</p>
            </div>
        )
    })

    return (
        <div className={style.jobs}>
            <div className={style.firstSection}>
                <h3 className={style.name}>{props.title}</h3>
                <svg className={style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                </svg>
            </div>
            {posts}
        </div>
    )
}

Jobs.propTypes = {
    title: PropTypes.string,
    jobs: PropTypes.arrayOf(
        PropTypes.shape({
            position: PropTypes.string,
            description: PropTypes.string,
            salary: PropTypes.string,
            url: PropTypes.string,
        })
    )
}

export default Jobs;