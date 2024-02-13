import React, { useContext, useState } from "react";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import classes from "./CarDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ShopCarContext from "../../../store/shopCarContext";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../../UI/Confirm/Confirm";
const CarDetails = (props) => {
  const ShopCarCtx = useContext(ShopCarContext);
  const stopBubble = (e) => {
    e.stopPropagation();
  };
  const [showConfirm, setShowConfirm] = useState(false);
  const clearShopCar = () => {
    setShowConfirm(true);
  };
  const cancelClearHandler = (e) => {
    e.stopPropagation();
    setShowConfirm(false);
  };
  const okClearHandler = () => {
    ShopCarCtx.carDataDispatch({ type: "CLEAR" });
    setShowConfirm(false);
    props.onClear();
  };
  return (
    <Backdrop>
      {showConfirm && (
        <Confirm
          confirmText="确认清空购物车吗"
          onCancel={cancelClearHandler}
          onOk={okClearHandler}
        />
      )}
      <div className={classes.CarDetails} onClick={stopBubble}>
        <header className={classes.Header}>
          <h3 className={classes.Title}>商品详情</h3>
          <div className={classes.Clear} onClick={clearShopCar}>
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            <span>清空购物车</span>
          </div>
        </header>
        <div className={classes.FoodList}>
          {ShopCarCtx.foods &&
            ShopCarCtx.foods.map((item) => (
              <Meal noDesc key={item.id} meal={item}></Meal>
            ))}
        </div>
      </div>
    </Backdrop>
  );
};

export default CarDetails;
