import React from "react";
import classes from "./Loading.module.css";
export const Loading = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}> Ładowanie ...</h2>
    </div>
  );
};
