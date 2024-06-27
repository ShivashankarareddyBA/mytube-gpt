import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      // state.nowPlayingMovies = action.payload;
      return action.payload;
    },
  },
});
export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
