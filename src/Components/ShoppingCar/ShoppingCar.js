import React, { useContext, useState } from "react";
import classes from "./ShoppingCar.module.css";
import ShoppingBag from "../../assets/ShoppingBag.jpg";
import ShopCarContext from "../../store/shopCarContext";
import CarDetails from "./CarDetails/CarDetails";
import Payment from "./Payment/Payment";
const ShoppingCar = () => {
  const shoppingCarCtx = useContext(ShopCarContext);
  let isEmpty = shoppingCarCtx.totalAmount;
  const [showDetails, setShowDetails] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const checkCarDetails = () => {
    if (shoppingCarCtx.totalAmount === 0) return;
    setShowDetails((preState) => !preState);
  };
  const checkPayment = (e) => {
    e.stopPropagation();
    setShowPayment(true);
  };
  const closePayment = () => {
    setShowPayment(false);
  };
  return (
    <div
      className={`${classes.ShoppingCar} ${
        isEmpty === 0 ? classes.DarkBack : ""
      }`}
      onClick={checkCarDetails}
    >
      {showPayment && isEmpty !== 0 ? <Payment onClose={closePayment} /> : null}
      {showDetails && isEmpty !== 0 ? (
        <CarDetails onClear={checkCarDetails} />
      ) : null}
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
          <button className={classes.Button} onClick={checkPayment}>
            去结算
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCar;
