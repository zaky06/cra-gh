import React, { useState } from "react";
import style from "./miniprofile.module.css";
import Dropdown from "./dropdown/dropdown";

const Miniprofile = () => {
  const [isMenuOpened, setIsmenuOpened] = useState(false);

  function menuToggle() {
    setIsmenuOpened(!isMenuOpened);
  }

  return (
    <div className={style.container} onClick={menuToggle}>
      <img
        className={style.avatar}
        src="https://gambolthemes.net/workwise-new/images/resources/user.png"
      />
      <a className={style.name} href="#">
        John
      </a>
      <img
        className={style.icon}
        src="https://icon-library.com/images/drop-down-arrow-icon/drop-down-arrow-icon-25.jpg"
      />
      {isMenuOpened && <Dropdown />}
    </div>
  );
};

export default Miniprofile;
