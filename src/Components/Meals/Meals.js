//食物列表
import React from "react";
import Meal from "./Meal/Meal";
import classes from "./Meals.module.css";
const Meals = (props) => {
  return (
    <div className={classes.Meals}>
      {props.mealsData.map((item) => (
        <Meal
          key={item.id}
          meal={item}
          onAddMeal={props.onAddMeal}
          onSubMeal={props.onSubMeal}
        />
      ))}
    </div>
  );
};

export default Meals;
