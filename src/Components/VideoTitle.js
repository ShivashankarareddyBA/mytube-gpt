import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-40 px-15'>
      <h1 className='px-12 text-2xl font-bold my-2 text-gray-800'>{title}</h1>
      <p className='px-12 w-1/3 my-2 text-sm'>{overview}</p>
      <div className=' px-14 '>
        <button className='mx-2  rounded-lg border border-black bg-white text-black w-20 font-bold '>Play</button>
        <button className='mx-2  rounded-lg border border-black bg-gray-200 text-black w-20 font-bold'>More</button>
      </div>

    </div>
  )
}

export default VideoTitle
