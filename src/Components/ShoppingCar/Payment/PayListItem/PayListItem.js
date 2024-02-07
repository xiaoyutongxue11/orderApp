import React from "react";
import classes from "./PayListItem.module.css";
import Counter from "../../../../UI/Counter/Counter";
const PayListItem = (props) => {
  return (
    <div className={classes.PayListItem}>
      <div className={classes.ImgBox}>
        <img alt="支付商品列表" src={props.meal.img} />
      </div>
      <div className={classes.Desc}>
        <h3 className={classes.Title}>{props.meal.title}</h3>
        <div className={classes.PriceWrap}>
          <Counter meal={props.meal} amount={props.meal.amount} />
          <div className={classes.Price}>
            {props.meal.price * props.meal.amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayListItem;
