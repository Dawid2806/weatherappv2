import React, { useState } from "react";
import { useSearch } from "../../../Hooks/useSearch";
import { Btn } from "../../UI/Btn";
import { Error } from "../../atoms/Error/Error";
import classes from "./Search.module.css";
export const Search = (props) => {
  const { searchWithCity, searchWithGeolocation, handleChange, city, error } =
    useSearch();

  return (
    <>
      <form onSubmit={searchWithCity} className={classes.form}>
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
