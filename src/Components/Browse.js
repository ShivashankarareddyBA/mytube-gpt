import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/account/21334528/watchlist/movies?&page=1&sort_by=created_at.asc",
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
    </div>
  );
};

export default Browse;
