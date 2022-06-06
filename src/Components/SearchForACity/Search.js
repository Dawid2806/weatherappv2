import React, { useState } from "react";
import { useCurrentDay } from "../../Hooks/useCurrentDay";
import { useForecast } from "../../Hooks/useForecast";
//Components
import { Btn } from "../UI/Btn";
import { Error } from "../Result/Error";
//Css
import classes from "./Search.module.css";
export const Search = (props) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const { giveDataFromForecastApi } = useForecast();
  const { fetchCurrentDayDataFromApi } = useCurrentDay();
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (city.length < 4) {
      setError(true);
      return;
    } else {
      fetchCurrentDayDataFromApi(city);
      giveDataFromForecastApi(city);
      props.ready(true);
      setCity("");
      setError(false);
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
            giveDataFromForecastApi(city);
          })
          .then(() => {
            props.ready(true);
          });
        setError(false);
      });
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="Podaj miasto"
          value={city}
          onChange={handleChange}
        />
        {error && (
          <Error
            error={"Nazwa miasta nie może być pusta lub mieć mniej jak 4 znaki"}
          />
        )}
        <Btn text="Dodaj" onClick={props.onClick} />
      </form>
      <Btn
        onClick={searchWithGeolocation}
        style={{ width: "100%" }}
        text="Użyj swojej lokalizacji "
      />
      {error && (
        <Error
          error={"Nie można wczytać twojej lokalizacji sprawdz ustawienia"}
        />
      )}
    </>
  );
};
