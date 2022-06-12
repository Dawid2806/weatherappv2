import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    showResult: false,
  },
  reducers: {
    toggleShowResult: (state) => {
      state.showResult = !state.showResult;
    },
  },
});
export default searchSlice.reducer;
export const { toggleShowResult } = searchSlice.actions;
