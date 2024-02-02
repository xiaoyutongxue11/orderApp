import React from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const Counter = (props) => {
  const addMealHandler = () => {
    props.onAddMeal(props.meal);
  };
  const subMealHandler = () => {
    props.onSubMeal(props.meal);
  };
  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount > 0 ? (
        <>
          <button className={classes.Sub} onClick={subMealHandler}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className={classes.Count}>{props.meal.amount}</span>
        </>
      ) : null}
      <button className={classes.Add} onClick={addMealHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Counter;
