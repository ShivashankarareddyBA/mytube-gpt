import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="p-1">
      <h1 className=" py-1 text-gray-400">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex m-1 p-1">
          {movies.map((movies) => (
            <MovieCards posterPath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
