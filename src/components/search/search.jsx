import React from "react";
import { useForm } from "react-hook-form";
import { form, search, button, img, orangeButton } from "./search.module.css";
import PropTypes from "prop-types";

export default function Search(props) {
  const { iconSrc, placeholder, className } = props;
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  console.log(iconSrc);

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
