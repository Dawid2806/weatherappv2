import { useSelector, useDispatch } from "react-redux";
import { weatherFetchForecast } from "../store/weatherForecase";
export const useForecast = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const forecastDaysWeahterData = state?.weatherSliceForecastReducer;

  const giveDataFromForecastApi = (city) => {
    dispatch(
      weatherFetchForecast(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=6acd30bef3ad4794b8105c7672b63001&include=minutely&lang=pl`
      )
    );
  };
  const forecastDaysHelper = {
    today: {
      pop: forecastDaysWeahterData.weather?.data[0]?.pop,
    },
    tomorrow: {
      data: forecastDaysWeahterData.weather?.data[1]?.valid_date,
      highTemp: forecastDaysWeahterData.weather?.data[1]?.high_temp,
      minTemp: forecastDaysWeahterData.weather?.data[1]?.low_temp,
      description:
        forecastDaysWeahterData.weather?.data[1]?.weather.description,
      iconLink: `https://www.weatherbit.io/static/img/icons/${forecastDaysWeahterData.weather?.data[1]?.weather.icon}.png`,
    },
    afterTomorrow: {
      data: forecastDaysWeahterData.weather?.data[2]?.valid_date,
      highTemp: forecastDaysWeahterData.weather?.data[2]?.high_temp,
      minTemp: forecastDaysWeahterData.weather?.data[2]?.low_temp,
      description:
        forecastDaysWeahterData.weather?.data[2]?.weather.description,
      iconLink: `https://www.weatherbit.io/static/img/icons/${forecastDaysWeahterData.weather?.data[2]?.weather.icon}.png`,
    },
    nextAfterTomorrow: {
      data: forecastDaysWeahterData.weather?.data[3]?.valid_date,
      highTemp: forecastDaysWeahterData.weather?.data[3]?.high_temp,
      minTemp: forecastDaysWeahterData.weather?.data[3]?.low_temp,
      description:
        forecastDaysWeahterData.weather?.data[3]?.weather.description,

      iconLink: `https://www.weatherbit.io/static/img/icons/${forecastDaysWeahterData.weather?.data[3]?.weather.icon}.png`,
    },
  };

  return { giveDataFromForecastApi, forecastDaysHelper };
};
