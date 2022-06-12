import { configureStore } from "@reduxjs/toolkit";
import weatherSliceCurrentDay from "./weather-slice";
import weatherForecase from "./weatherForecase";
import searchSlice from "./searchSlice";
export const store = configureStore({
  reducer: {
    weatherSliceCurrentDay: weatherSliceCurrentDay,
    weatherSliceForecastReducer: weatherForecase,
    searchSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
