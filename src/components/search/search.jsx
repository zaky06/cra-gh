import React from "react";
import { useForm } from "react-hook-form";
import { form, search, button, img } from './search.module.css';
import PropTypes from 'prop-types';

export default function Search({ iconSrc }) {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  console.log(iconSrc)

  return (
    <form className={form} onSubmit={handleSubmit(onSubmit)}>
      <input className={search} placeholder="Search..." defaultValue="" {...register("example")} />      
      <button className={button} type="submit">
        <img className={img} src={iconSrc}/>
      </button>
    </form>
  );
}

Search.propTypes = {
  iconSrc: PropTypes.string
};