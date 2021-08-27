import React from "react";
import { useForm } from "react-hook-form";
import style from './search.module.css';
import PropTypes from 'prop-types';

export default function Search(props) {
  const { register, handleSubmit, watch} = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className={style.Form} onSubmit={handleSubmit(onSubmit)}>
      <input className={style.search} placeholder="Search..." defaultValue="" {...register("example")} />      
      <button className={style.button} type="submit">
            <img className={style.img} src={props.img} name={props.name} />
      </button>
    </form>
  );
}

Search.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
};