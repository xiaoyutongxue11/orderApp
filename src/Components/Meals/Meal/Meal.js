//食物信息
import React from "react";
import classes from "./Meal.module.css";
import Counter from "../../../UI/Counter/Counter";
const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.ImgBox}>
        <img alt="" src={props.meal.img}></img>
      </div>
      <div className={classes.Content}>
        <div className={classes.Text}>
          <h2 className={classes.Title}>{props.meal.title}</h2>
          <p>{props.meal.desc}</p>
        </div>
        <div className={classes.PriceWrap}>
          <span className={classes.Price}>{props.meal.price}</span>
          <Counter
            meal={props.meal}
            onAddMeal={props.onAddMeal}
            onSubMeal={props.onSubMeal}
          />
        </div>
      </div>
    </div>
  );
};

export default Meal;
