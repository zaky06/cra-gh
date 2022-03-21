import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import styles from "./search.module.css";
import PropTypes from "prop-types";

const { form, search, button, img, orangeButton } = styles; 

export default function Search(props) {
  const { placeholder, className } = props;
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  const isHeaderSearch = Boolean(placeholder);

  const [searchIcon, setSearchIcon] = useState("");

  const fetchSearch = async () => {
    const response = await fetch("http://localhost:8080/search");
    const data = await response.json();
    console.count()
    return data;
  }
  
  useEffect(() => {
    if (isHeaderSearch) {
      fetchSearch().then((data) => setSearchIcon(data.iconSrc));
    }
  }, []);

  return (
    <form className={form + " " + className} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={search}
        placeholder={placeholder}
        defaultValue=""
        {...register("example")}
      />
      <button className={isHeaderSearch ? button : orangeButton} type="submit">
        {isHeaderSearch ? (
          <img className={img} src={searchIcon} />
        ) : (
          <span>Ok</span>
        )}
      </button>
    </form>
  );
}

Search.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
