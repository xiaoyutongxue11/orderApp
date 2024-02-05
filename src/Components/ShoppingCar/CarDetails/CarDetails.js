import React, { useContext } from "react";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import classes from "./CarDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import ShopCarContext from "../../../store/shopCarContext";
import Meal from "../../Meals/Meal/Meal";
const CarDetails = () => {
  const ShopCarCtx = useContext(ShopCarContext);
  return (
    <Backdrop>
      <div className={classes.CarDetails}>
        <header className={classes.Header}>
          <h3 className={classes.Title}>商品详情</h3>
          <div className={classes.Clear}>
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
