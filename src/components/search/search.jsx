import React from "react";
import { useForm } from "react-hook-form";
import styles from "./search.module.css";
import PropTypes from "prop-types";

const { form, search, button, img, orangeButton } = styles; 

export default function Search(props) {
  const { iconSrc, placeholder, className } = props;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);




  return (
    <form className={form + " " + className} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={search}
        placeholder={placeholder}
        defaultValue=""
        {...register("example")}
      />
      <button className={!props.iconSrc ? orangeButton : button} type="submit">
        {!props.iconSrc ? (
          <span>Ok</span>
        ) : (
          <img className={img} src={iconSrc} />
        )}
      </button>
    </form>
  );
}

// <img className={img} src={iconSrc}/>

Search.propTypes = {
  iconSrc: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
