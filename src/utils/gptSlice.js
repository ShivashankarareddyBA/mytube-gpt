import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
   name: "gpt",
   initialState: {
      showGptSearch: false,
      gptMovie:null,
   },
   reducers: {
      toggleGptSearchView: (state) => {
         state.showGptSearch = !state.showGptSearch;
      }
   },
   addGptMoviesResult:(state, action) =>{
      const {movieName, movieResults} =action.payload;
      state.movieName =movieName;
      state.movieResults = movieResults;
   },
   
})

export const { toggleGptSearchView, addGptMoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
