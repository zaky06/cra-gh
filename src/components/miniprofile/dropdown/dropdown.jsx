import React, { useState } from "react";
import style from "./dropdown.module.css";
import Demo1 from "./radio";
import Search from "../../search/search";

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
          <h3>Custom Status</h3>
          <div className={style.search}>
            <Search />
          </div>
          <h3>Settings</h3>
          <div className={style.setting}>
              <a href="">
                  <small>
                    Account Setting
                  </small>
              </a>
              <a href="">
                  <small>
                      Privacy
                  </small>
              </a>
              <a href="">
                  <small>
                      Faqs
                  </small>
              </a>
              <a href="">
                  <small>
                      Terms {`&`} Conditions
                  </small>
              </a>
          </div>
          <h3>Logout</h3>
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
