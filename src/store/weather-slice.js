import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const weatherFetchCurrentDay = createAsyncThunk(
  "weather/fetch",
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

const weatherSliceCurrentDay = createSlice({
  name: "weatherSlice",
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(weatherFetchCurrentDay.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(weatherFetchCurrentDay.fulfilled, (state, action) => {
      state.weather = action?.payload;
      state.loading = false;
      state.error = undefined;
    });
    builder.addCase(weatherFetchCurrentDay.rejected, (state, action) => {
      state.loading = false;
      state.weather = undefined;
      state.error = action?.payload;
    });
  },
});

export default weatherSliceCurrentDay.reducer;
