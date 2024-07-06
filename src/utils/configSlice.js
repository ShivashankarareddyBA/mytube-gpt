import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    chanageLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { chanageLanguage } = configSlice.actions;

export default configSlice.reducer;
