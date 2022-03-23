import React, { useState, useEffect } from "react";
import style from "./header.module.css";
import Nav from "../nav/nav";
import Search from "../search/search";
import Miniprofile from "../miniprofile/miniprofile";
import Profilelist from "../profilelist/profilelist";

const Header = () => {
  const [navItems, setNavItems] = useState([]);
  
  const fetchNav = async () => {
    const response = await fetch("http://localhost:8080/nav");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    fetchNav().then((nav) => {
      setNavItems(nav)
    });
  }, []);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.left}>
          <img
            className={style.logo}
            src="https://gambolthemes.net/workwise-new/images/logo.png"
          />
          <Search
            className={style.search}
            placeholder={"Search..."}
          />
        </div>
        <div className={style.right}>
          <Nav nav={navItems} />
          <Miniprofile />
          <Profilelist nav={navItems} />
        </div>
      </div>
    </header>
  );
};

export default Header;
