import React, { useContext, useState } from "react";
import classes from "./ShoppingCar.module.css";
import ShoppingBag from "../../assets/ShoppingBag.jpg";
import ShopCarContext from "../../store/shopCarContext";
import CarDetails from "./CarDetails/CarDetails";
const ShoppingCar = () => {
  const shoppingCarCtx = useContext(ShopCarContext);
  let isEmpty = shoppingCarCtx.totalAmount;
  const [showDetails, setDetails] = useState(false);
  const checkCarDetails = () => {
    if (shoppingCarCtx.totalAmount === 0) return;
    setDetails((preState) => !preState);
  };
  return (
    <div
      className={`${classes.ShoppingCar} ${
        isEmpty === 0 ? classes.DarkBack : ""
      }`}
      onClick={checkCarDetails}
    >
      {showDetails && <CarDetails onClear={checkCarDetails} />}
      <div className={classes.Icon}>
        <img alt="购物袋" src={ShoppingBag} />
        {isEmpty === 0 ? null : (
          <span className={classes.totalAmount}>
            {shoppingCarCtx.totalAmount}
          </span>
        )}
      </div>
      {isEmpty === 0 ? (
        <>
          <p className={classes.NoFood}>未选中商品</p>
          <button className={`${classes.Button} ${classes.DarkButton}`}>
            去结算
          </button>
        </>
      ) : (
        <>
          <p className={classes.Price}>{shoppingCarCtx.totalPrice}</p>
          <button className={classes.Button}>去结算</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCar;
