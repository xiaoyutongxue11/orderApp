import React, { useContext } from "react";
import classes from "./Counter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import ShopCarContext from "../../store/shopCarContext";
const Counter = (props) => {
  const shopCarCtx = useContext(ShopCarContext);
  const addMealHandler = (e) => {
    e.stopPropagation();
    shopCarCtx.addMealHandler(props.meal);
  };
  const subMealHandler = (e) => {
    e.stopPropagation();
    shopCarCtx.subMealHandler(props.meal);
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
