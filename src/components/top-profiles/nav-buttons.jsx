import React from "react";
import PropTypes from "prop-types";
import style from "./top-profiles.module.css"
import { Button } from "react-bootstrap";
import { IoIosArrowForward, IoIosArrowBack} from 'react-icons/io';

const NavButtons = ({ next, previous }) => {
    return (
        <>
          <Button className={style.previous + " " + style.navButtons} onClick={() => previous()} variant="outline-danger"><IoIosArrowBack /></Button>
          <Button className={style.next + " " + style.navButtons} variant="outline-danger" onClick={() => next()}><IoIosArrowForward /></Button>
        </>
    );
  };

  NavButtons.propTypes = {
    next: PropTypes.func,
    previous: PropTypes.func
  }

export default NavButtons;


  