import React from "react";
import ReactDOM from "react-dom";
import classes from "./Payment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const Payment = (props) => {
  const paymentRoot = document.getElementById("payment-root");
  const close = (e) => {
    e.stopPropagation();
    props.onClose();
  };
  return ReactDOM.createPortal(
    <div className={classes.Payment}>
      <FontAwesomeIcon icon={faClose} onClick={close}></FontAwesomeIcon>
    </div>,
    paymentRoot
  );
};

export default Payment;
