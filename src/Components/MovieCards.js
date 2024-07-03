import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCards = ({posterPath}) => {

    
  return (
    <div  className=' w-40 pr-2'>
      <img alt='Movie Card'
       src={IMG_CDN_URL + posterPath}
      />
    </div>
  )
}

export default MovieCards