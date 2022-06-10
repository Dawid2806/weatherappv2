import React from "react";
import classes from "./Result.module.css";

import { useCurrentDay } from "../../../Hooks/useCurrentDay";
import { useForecast } from "../../../Hooks/useForecast";
export const Result = (props) => {
  const { currentDayData, currentWeatericonLink } = useCurrentDay();
  const { forecastDays } = useForecast();
  return (
    <main className={classes.main}>
      <h1 className={classes.city}>{currentDayData.city}</h1>
      <div className={classes.mainContainer}>
        <img
          src={currentWeatericonLink}
          alt=""
          className={classes.currentIcon}
        />
        <span className={classes.temperature}>
          <span className={classes.grades}>{currentDayData.temp}℃</span>
        </span>
        <span className={classes.weather}>{currentDayData.description}</span>
      </div>
      <div className={classes.threeDaysContainer}>
        <ul className={classes.threeDays}>
          <li className={classes.threeDaysItem}>
            <img
              className={classes.forecastICon}
              src={forecastDays.tomorrow.iconLink}
              alt=""
            />{" "}
            {props.tomorrowDay}.{forecastDays.tomorrow.description}{" "}
            <span className={classes.threeDaysItemTemp}>
              {forecastDays.tomorrow.highTemp}°/
              {forecastDays.tomorrow.minTemp}°
            </span>
          </li>
          <li className={classes.threeDaysItem}>
            <img
              className={classes.forecastICon}
              src={forecastDays.afterTomorrow.iconLink}
              alt=""
            />{" "}
            {props.afterTomorrowDay}.{forecastDays.afterTomorrow.description}{" "}
            <span className={classes.threeDaysItemTemp}>
              {forecastDays.afterTomorrow.highTemp}°/
              {forecastDays.afterTomorrow.minTemp}°
            </span>
          </li>
          <li className={classes.threeDaysItem}>
            <img
              className={classes.forecastICon}
              src={forecastDays.nextAfterTomorrow.iconLink}
              alt=""
            />{" "}
            {props.nextAfterTomorrowDay}.
            {forecastDays.nextAfterTomorrow.description}{" "}
            <span className={classes.threeDaysItemTemp}>
              {forecastDays.nextAfterTomorrow.highTemp}°/
              {forecastDays.nextAfterTomorrow.minTemp}°
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
};
