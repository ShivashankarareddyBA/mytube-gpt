import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="px-1 bg-black w-screen">
      <h1 className="text-lg md:text-3xl text-white py-1">{title}</h1>

      <div className="flex overflow-x-scroll ">
        <div className="flex"> 
          {movies?.map((movies) => (
            <MovieCards key={movies.id} posterPath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>

    
  );
};

export default MovieList;
