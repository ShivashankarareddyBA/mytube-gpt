import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store)=> store.movies);

return (
  movies.nowPlayingMovies && (
<div className="bg-black">
    <div className="-mt-56  relative z-10 ">
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular"} movies={movies.popularMovies}/>
    <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
    <MovieList title={"Up Comming"} movies={movies.upComingMoives}/>
    <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>   
    </div>
    </div>
)
);
};

export default SecondryContainer;
