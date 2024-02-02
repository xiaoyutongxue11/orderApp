//食物列表
import React from "react";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";
const Meals = () => {
  return (
    <div className={classes.Meals}>
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
      <Meal />
    </div>
  );
};

export default Meals;
