import React from 'react';
import style from './dropdown.module.css';



const Dropdown = () => {
    return (
        <div className={style.action}>
            <div className={style.profile} onClick={menuToggle()}>
              <img className={style.icon} src="https://icon-library.com/images/drop-down-arrow-icon/drop-down-arrow-icon-25.jpg"/>   
            </div>
            <div className={style.menu}>
                <h3>Online Status</h3>
            </div>
        </div>    
    )
    function menuToggle() {
        const toggleMenu = document.querySelector('.menu');
        toggleMenu.classList.toggle('active');
    }
}

export default Dropdown;

{/* <span>
    <img className={style.icon} src="https://icon-library.com/images/drop-down-arrow-icon/drop-down-arrow-icon-25.jpg"/>
</span> */}