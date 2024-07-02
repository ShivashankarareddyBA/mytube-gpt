import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondryContainer = () => {
  const movies = useSelector((store)=> store.movies);

return <div>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Up Comming"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>   
    
    </div>;
};

export default SecondryContainer;
