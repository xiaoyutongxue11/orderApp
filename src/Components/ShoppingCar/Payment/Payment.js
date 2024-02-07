import React, { useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Payment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import ShopCarContext from "../../../store/shopCarContext";
import PayListItem from "./PayListItem/PayListItem";
import PayBar from "./PayBar/PayBar";
const Payment = (props) => {
  const paymentRoot = document.getElementById("payment-root");
  const close = (e) => {
    e.stopPropagation();
    props.onClose();
  };
  const shopCarCtx = useContext(ShopCarContext);
  return ReactDOM.createPortal(
    <div className={classes.PaymentOuter}>
      <FontAwesomeIcon icon={faClose} onClick={close}></FontAwesomeIcon>
      <div className={classes.Payment}>
        <header className={classes.Header}>餐品详情</header>
        <div className={classes.PayList}>
          {shopCarCtx.foods.map((item) => (
            <PayListItem meal={item} key={item.id} />
          ))}
        </div>
        <footer className={classes.Footer}>
          <p className={classes.TotalPrice}>{shopCarCtx.totalPrice}</p>
        </footer>
      </div>
      <PayBar />
    </div>,
    paymentRoot
  );
};

export default Payment;
