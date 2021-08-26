import React from "react";
import { useForm } from "react-hook-form";
import style from './styles.module.css';

export default function Search() {
  const { register, handleSubmit, watch} = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className={style.Form} onSubmit={handleSubmit(onSubmit)}>
      <input className={style.search} placeholder="Search..." defaultValue="" {...register("example")} />      
      <button className={style.button} type="submit">
            <img className={style.img} src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="" />
      </button>
    </form>
  );
}