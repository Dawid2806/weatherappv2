import React from "react";
import classes from "./Info.module.css";

export const Info = (props) => {
  return (
    <div className={classes.infoBox}>
      <ul className={classes.itemsBox}>
        <li className={classes.item}>
          Odczuwalnie
          <span className={classes.itemDetail}>{props.feelsLike}℃</span>
        </li>
        <li className={classes.item}>
          Wilgotność
          <span className={classes.itemDetail}>{props.humidity}%</span>
        </li>
        <li className={classes.item}>
          Możliwe opady deszczu
          <span className={classes.itemDetail}>{props.chanceOfRain}%</span>
        </li>
        <li className={classes.item}>
          Prędkość wiatru
          <span className={classes.itemDetail}>{props.windSpd} km/h</span>
        </li>
        <li className={classes.item}>
          Ciśnienie<span className={classes.itemDetail}>{props.pres} mbar</span>
        </li>
        <li className={classes.item}>
          index UV<span className={classes.itemDetail}>{props.uv}</span>
        </li>
      </ul>
    </div>
  );
};
