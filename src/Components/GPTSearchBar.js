import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 grid grid-cols-12'>
        <input type='text' placeholder=' Today what would you like to watch' className='col-span-10 m-2 p-2 border border-gray-400'/>
        <button className='col-span-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 m-2 p-2'>Search</button>


      </form>
    </div>
  )
}

export default GPTSearchBar
