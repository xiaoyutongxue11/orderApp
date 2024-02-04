import React, { useContext } from "react";
import classes from "./ShoppingCar.module.css";
import ShoppingBag from "../../assets/ShoppingBag.jpg";
import ShopCarContext from "../../store/shopCarContext";
const ShoppingCar = () => {
  const shoppingCarCtx = useContext(ShopCarContext);
  return (
    <div className={classes.ShoppingCar}>
      <div className={classes.Icon}>
        <img alt="购物袋" src={ShoppingBag} />
        <span className={classes.totalAmount}>
          {shoppingCarCtx.totalAmount}
        </span>
      </div>
      <p className={classes.Price}>{shoppingCarCtx.totalPrice}</p>
      <button className={classes.Button}>去结算</button>
    </div>
  );
};

export default ShoppingCar;
