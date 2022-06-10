import { useSelector, useDispatch } from "react-redux";
import { weatherFetchCurrentDay } from "../store/weather-slice";
import { useForecast } from "./useForecast";
export const useCurrentDay = () => {
  const { forecastDays } = useForecast();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const currentDayWeahterData =
    state?.weatherSliceCurrentDay?.weather?.data[0] || null;
  const fetchCurrentDayDataFromApi = (city) => {
    dispatch(
      weatherFetchCurrentDay(
        `https://api.weatherbit.io/v2.0/current?city=${city}&key=6acd30bef3ad4794b8105c7672b63001&include=minutely&lang=pl`
      )
    );
  };
  const currentDayData = {
    city: currentDayWeahterData?.city_name,
    temp: currentDayWeahterData?.temp.toFixed(),
    description: currentDayWeahterData?.weather.description,
    uv: currentDayWeahterData?.uv.toFixed(),
    pres: currentDayWeahterData?.pres.toFixed(),
    windSpd: Math.floor(currentDayWeahterData?.wind_spd * 3.6),
    humidity: currentDayWeahterData?.rh.toFixed(),
    feelsLike: currentDayWeahterData?.app_temp,
    chanceOfRain: forecastDays?.today.pop,
    icon: currentDayWeahterData?.weather.icon,
  };
  const currentWeatericonLink = `https://www.weatherbit.io/static/img/icons/${currentDayData.icon}.png`;

  return {
    dispatch,
    fetchCurrentDayDataFromApi,
    currentDayData,
    currentWeatericonLink,
  };
};
