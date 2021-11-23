import React, { useState } from "react";
import style from "./dropdown.module.css";
import Demo1 from "./radio";

const Dropdown = () => {
  const [isMenuOpened, setIsmenuOpened] = useState(false);

  function menuToggle() {
    setIsmenuOpened(!isMenuOpened);

    // const toggleMenu = document.querySelector('.menu');
    // toggleMenu.classList.toggle('active');
  }

  return (
    <div className={style.action}>
      <div className={style.profile} onClick={menuToggle}>
        <img
          className={style.icon}
          src="https://icon-library.com/images/drop-down-arrow-icon/drop-down-arrow-icon-25.jpg"
        />
      </div>
      {isMenuOpened && (
        <div className={style.menu}>
          <h3>Online Status</h3>
          <Demo1 />
        </div>
      )}
    </div>
  );
};

export default Dropdown;

{
  /* <span>
    <img className={style.icon} src="https://icon-library.com/images/drop-down-arrow-icon/drop-down-arrow-icon-25.jpg"/>
</span> */
}
