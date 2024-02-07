import React, { useContext } from "react";
import classes from "./PayBar.module.css";
import ShopCarContext from "../../../../store/shopCarContext";
const PayBar = () => {
  const shopCarCtx = useContext(ShopCarContext);
  return (
    <div className={classes.PayBar}>
      <p className={classes.TotalPrice}>{shopCarCtx.totalPrice}</p>
      <button className={classes.Button}>去支付</button>
    </div>
  );
};

export default PayBar;
