import { configureStore } from "@reduxjs/toolkit";
import weatherSliceCurrentDay from "./weather-slice";
import weatherForecase from "./weatherForecase";
export const store = configureStore({
  reducer: {
    weatherSliceCurrentDay: weatherSliceCurrentDay,
    weatherSliceForecastReducer: weatherForecase,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
