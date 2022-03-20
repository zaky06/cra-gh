import React, { useState, useEffect } from "react";
import style from "./topprofiles.module.css";
import TopProfile from "../top-profile";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavButtons from "./nav-buttons";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1199 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1199, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TopProfiles = () => {
  // стейт для хранения данных
  const [profiles, setProfiles] = useState([]);

  // метод с запросом на сервер
  const fetchUsers = async () => {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    return data;
  };

  // хук для того, чтобы запрос происходил только при маунте компонента
  useEffect(() => {
    fetchUsers().then((users) => {
      setProfiles(users);
    });
  }, []);

  return (
    <div className={style.topProfiles}>
      <div className={style.firstSection}>
        <h3 className={style.name}>Top Profiles</h3>
        <svg
          className={style.iconSvg}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
      </div>
      <div className={style.carusel}>
        <Carousel
          infinite={true}
          renderButtonGroupOutside={true}
          arrows={false}
          customButtonGroup={<NavButtons />}
          responsive={responsive}
        >
          {profiles.map((user, index) => {
            return (
              <div key={index}>
                <TopProfile user={user} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default TopProfiles;
