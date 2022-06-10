import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Info } from "./Components/organisms/Info/Info";
import { Result } from "./Components/organisms/Result/Result";
import { Search } from "./Components/molecules/Search/Search";
import { Loading } from "./Components/atoms/Loading/Loading";
import { useCurrentDay } from "./Hooks/useCurrentDay";
import { Error } from "./Components/atoms/Error/Error";
import { IsDay } from "../src/unit/IsDay";
import { useSearch } from "./Hooks/useSearch";
import "./App.css";
function App() {
  const { showResult } = useSearch();
  const { currentDayData } = useCurrentDay();
  const { tomorrowDay, afterTomorrowDay, nextAfterTomorrowDay } = IsDay();
  const state = useSelector(
    (state) => state.weatherSliceCurrentDay && state.weatherSliceForecastReducer
  );

  const { loading, error } = state;

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if (error) {
    <div>
      <Error
        error={
          "wystąpił błąd !! Sprawdz ustawienia Sieci  lub odśwież ponownie"
        }
      />
    </div>;
  }
  return (
    <div className="App">
      <Search />
      {showResult && (
        <>
          <Result
            tomorrowDay={tomorrowDay}
            afterTomorrowDay={afterTomorrowDay}
            nextAfterTomorrowDay={nextAfterTomorrowDay}
          />
          <Info
            feelsLike={currentDayData.feelsLike}
            humidity={currentDayData.humidity}
            windSpd={currentDayData.windSpd}
            pres={currentDayData.pres}
            chanceOfRain={currentDayData.chanceOfRain}
            uv={currentDayData.uv}
          />
        </>
      )}
    </div>
  );
}

export default App;
