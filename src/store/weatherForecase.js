import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const weatherFetchForecast = createAsyncThunk(
  "weather/",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const { data } = await axios.get(payload);
      return data;
    } catch (error) {
      if (!error?.respone) {
        throw error;
      }
      return rejectWithValue(error?.respone?.data);
    }
  }
);
const weatherSliceForecast = createSlice({
  name: "weatherSliceForecast",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(weatherFetchForecast.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(weatherFetchForecast.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = false;
    });
    builder.addCase(weatherFetchForecast.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = true;
    });
  },
});

export default weatherSliceForecast.reducer;
