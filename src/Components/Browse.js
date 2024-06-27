import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";
import MovieTitle from "./MovieTitle";
import MovieTrailer from "./MovieTrailer";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?page=1',
      API_OPTIONS
    );
    
    const json = await data.json();

    console.log(json);
  };

  useEffect(()=>{
    getNowPlayingMovies();
  },[])

  return (
    <div>
      <Header />
      <MovieTitle/>
      <MovieTrailer/>
    </div>
  );
};

export default Browse;
