import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useCurrentDay } from "./useCurrentDay";
import { useForecast } from "./useForecast";
import { toggleShowResult } from "../store/searchSlice";
export const useSearch = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const { FetchForecastDaysFromData } = useForecast();
  const { fetchCurrentDayDataFromApi } = useCurrentDay();
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const searchWithCity = (e) => {
    e.preventDefault();

    if (city.length < 4) {
      setError(true);
      return;
    } else {
      fetchCurrentDayDataFromApi(city);
      FetchForecastDaysFromData(city);
      setCity("");
      setError(true);
      dispatch(toggleShowResult());
    }
  };
  const searchWithGeolocation = (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        fetch(
          `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=6acd30bef3ad4794b8105c7672b63001&include=minutely`
        )
          .then((res) => res.json())
          .then((data) => {
            const city = data.data[0].city_name;
            fetchCurrentDayDataFromApi(city);
            FetchForecastDaysFromData(city);
          })
          .then(() => {});
        setError(true);
        dispatch(toggleShowResult());
      });
    }
  };
  return {
    searchWithGeolocation,
    searchWithCity,
    city,
    setCity,
    error,
    setError,
    handleChange,
  };
};
