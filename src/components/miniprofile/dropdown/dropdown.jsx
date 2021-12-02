import React from "react";
import style from "./dropdown.module.css";
import Status from "./status";
import Search from "../../search/search";

const Dropdown = () => {
  return (
    <div className={style.action}>
      <div className={style.menu}>
        <h3 className={style.h3Border}>Online Status</h3>
        <Status />
        <h3 className={style.h3Border}>Custom Status</h3>
        <div className={style.search}>
          <Search />
        </div>
        <h3 className={style.h3Setting}>Settings</h3>
        <div className={style.setting}>
          <a href="">
            <small>Account Setting</small>
          </a>
          <a href="">
            <small>Privacy</small>
          </a>
          <a href="">
            <small>Faqs</small>
          </a>
          <a href="">
            <small>Terms {`&`} Conditions</small>
          </a>
        </div>
        <h3 className={style.h3Logout}>Logout</h3>
      </div>
    </div>
  );
};

export default Dropdown;
