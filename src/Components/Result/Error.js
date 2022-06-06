import React from "react";
import classes from "./Error.module.css";
export const Error = (props) => {
  return <div className={classes.error}>{props.error.toUpperCase()}</div>;
};
