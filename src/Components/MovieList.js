import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
    console.log(movies);
    if(!movies) return;
  return (
    <div > 
        <h1>{title}</h1>

      <div className="flex overflow-x-scroll" >
        
        <div  className="flex m-1 p-1">
            {movies.map(movies=><MovieCards posterPath={movies.poster_path}/>)}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;
