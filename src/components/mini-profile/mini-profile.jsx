import React, { useState } from "react";
import style from "./mini-profile.module.css";
import Dropdown from "./dropdown/dropdown";

const Miniprofile = () => {
  const [isMenuOpened, setIsmenuOpened] = useState(false);

  function menuToggle() {
    setIsmenuOpened(!isMenuOpened);
  }

  const rotatedClassname = isMenuOpened ? style.iconSvgRotated : '';

  return (
    <div className={style.wrapper}>
      <div className={style.container} onClick={menuToggle}>
        <img
          className={style.avatar}
          src="https://gambolthemes.net/workwise-new/images/resources/user.png"
        />
        <a className={style.name} href="#">
          John
        </a>
        <svg className={rotatedClassname + " " + style.iconSvg} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 5.887l8.468 14.113h-16.936l8.468-14.113zm0-3.887l-12 20h24l-12-20z"/>
        </svg>
      </div>
      {isMenuOpened && <Dropdown />}
    </div>
  );
};

export default Miniprofile;
