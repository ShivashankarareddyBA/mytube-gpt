import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {
if(!posterPath) return null;
    
  return (
    <div  className=' w-36 md:w-40 pr-2 hover:scale-105 ease-in-out duration-300 cursor-pointer '>
      <img alt='Movie Card'
       src={IMG_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCards
