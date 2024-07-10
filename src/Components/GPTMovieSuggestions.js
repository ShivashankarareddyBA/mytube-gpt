import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestions = () => {
  const {movieResults, movieName} = useSelector((store)=>store.gpt);
  if (!movieName || movieName.length === 0) return <div>No movies to display.</div>;
  
   return (
    <div className='p-4 m-4 bg-black text-white opacity-90'>
      <div>
        {movieName.map((name, index) => (
          <MovieList key={index} title={name} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  )
  
  // return (
  //   <div className='p-4 m-4 bg-black text-white opacity-90'>
  //     <div>{movieName.map((movieName,index        
  //     ) =><MovieList key={movieName}  title={movieName[0]} movies={movieResults[index]}/>)}
        
  //     </div>
  //   </div>
  // )
}

export default GPTMovieSuggestions
  