import React from "react";
import classes from "./Btn.module.css";
export const Btn = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      className={classes.button33}
    >
      {props.text}
    </button>
  );
};
