import React from "react";
import style from "./dropdown.module.css";

const Status = () => {
  return (
    <form action="" className={style.statusForm}>
      <ul>
        <li>
          <input
            className={style.onOffStatus}
            type="radio"
            id="online"
            name="status"
            value="online"
          />
          <label htmlFor="online">Online</label>
        </li>
        <li>
          <input type="radio" id="offline" name="status" value="offline" />
          <label htmlFor="offline">Offline</label>
        </li>
      </ul>
    </form>
  );
};

export default Status;
