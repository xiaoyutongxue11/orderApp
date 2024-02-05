import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./Confirm.module.css";
const Confirm = (props) => {
  const cancel = (e) => {
    props.onCancel(e);
  };
  return (
    <Backdrop onClick={cancel} className={classes.ConfirmOuter}>
      <div className={classes.Confirm}>
        <p>{props.confirmText}</p>
        <div className={classes.ButtonBox}>
          <button onClick={cancel}>取消</button>
          <button onClick={props.onOk} className={classes.Ok}>
            确认
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

export default Confirm;
