import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Info } from "./Components/Result/Info";
import { Result } from "./Components/Result/Result";
import { Search } from "./Components/SearchForACity/Search";
import { Loading } from "./Components/Result/Loading";
import { useCurrentDay } from "./Hooks/useCurrentDay";
import { useIsDay } from "./Hooks/useIsDay";
import { Error } from "./Components/Result/Error";
import "./App.css";
function App() {
  const [ready, setReady] = useState(false);
  const { currentDayDataHelper } = useCurrentDay();
  const { tomorrowDay, afterTomorrowDay, nextAfterTomorrowDay } = useIsDay();
  const state = useSelector(
    (state) => state.weatherSliceCurrentDay && state.weatherSliceForecastReducer
  );

  const { loading, error } = state;

  return (
    <div className="App">
      <Search ready={setReady} />

      {loading ? (
        <Loading />
      ) : error ? (
        <Error
          error={
            "wystąpił błąd !! Sprawdz ustawienia Sieci  lub odśwież ponownie"
          }
        />
      ) : (
        ready && (
          <>
            <Result
              tomorrowDay={tomorrowDay}
              afterTomorrowDay={afterTomorrowDay}
              nextAfterTomorrowDay={nextAfterTomorrowDay}
            />
            <Info
              feelsLike={currentDayDataHelper.feelsLike}
              humidity={currentDayDataHelper.humidity}
              windSpd={currentDayDataHelper.windSpd}
              pres={currentDayDataHelper.pres}
              chanceOfRain={currentDayDataHelper.chanceOfRain}
              uv={currentDayDataHelper.uv}
            />
          </>
        )
      )}
    </div>
  );
}

export default App;
