import React from 'react'
import { useSelector } from 'react-redux'

const MainContainer = () => {

const movies = useSelector(store=>store.movies?.nowPlayingMovies);
 if(!movies) return;

 const mainMovies= movies[0];
 console.log("dd", mainMovies);
  return (
    <div>
    </div>
  )
}

export default MainContainer
