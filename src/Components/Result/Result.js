import React from "react";
import classes from "./Result.module.css";

import { useCurrentDay } from "../../Hooks/useCurrentDay";
import { useForecast } from "../../Hooks/useForecast";
export const Result = (props) => {
  const { currentDayDataHelper, currentWeatericonLink } = useCurrentDay();
  const { forecastDaysHelper } = useForecast();
  return (
    <main className={classes.main}>
      <h1 className={classes.city}>{currentDayDataHelper.city}</h1>
      <div className={classes.mainContainer}>
        <img
          src={currentWeatericonLink}
          alt=""
          className={classes.currentIcon}
        />
        <span className={classes.temperature}>
          <span className={classes.grades}>{currentDayDataHelper.temp}℃</span>
        </span>
        <span className={classes.weather}>
          {currentDayDataHelper.description}
        </span>
      </div>
      <div className={classes.threeDaysContainer}>
        <ul className={classes.threeDays}>
          <li className={classes.threeDaysItem}>
            <img
              className={classes.forecastICon}
              src={forecastDaysHelper.tomorrow.iconLink}
              alt=""
            />{" "}
            {props.tomorrowDay}.{forecastDaysHelper.tomorrow.description}{" "}
            <span className={classes.threeDaysItemTemp}>
              {forecastDaysHelper.tomorrow.highTemp}°/
              {forecastDaysHelper.tomorrow.minTemp}°
            </span>
          </li>
          <li className={classes.threeDaysItem}>
            <img
              className={classes.forecastICon}
              src={forecastDaysHelper.afterTomorrow.iconLink}
              alt=""
            />{" "}
            {props.afterTomorrowDay}.
            {forecastDaysHelper.afterTomorrow.description}{" "}
            <span className={classes.threeDaysItemTemp}>
              {forecastDaysHelper.afterTomorrow.highTemp}°/
              {forecastDaysHelper.afterTomorrow.minTemp}°
            </span>
          </li>
          <li className={classes.threeDaysItem}>
            <img
              className={classes.forecastICon}
              src={forecastDaysHelper.nextAfterTomorrow.iconLink}
              alt=""
            />{" "}
            {props.nextAfterTomorrowDay}.
            {forecastDaysHelper.nextAfterTomorrow.description}{" "}
            <span className={classes.threeDaysItemTemp}>
              {forecastDaysHelper.nextAfterTomorrow.highTemp}°/
              {forecastDaysHelper.nextAfterTomorrow.minTemp}°
            </span>
          </li>
        </ul>
      </div>
    </main>
  );
};
