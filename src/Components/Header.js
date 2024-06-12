import React from 'react'
import logo from '../img/logo-color.png'



const Header = () => {
  return (
  <>
    <div className='absolute ml-20 mt-4 bg-gradient-to-b from-black z-10 opacity-80'>
      {/* log image */}
    <img  className='w-44' src={logo} alt='logo'/>
       
    </div>
     {/* <div className=' absolute '>
        
     <button onClick={Login} className=" font-bold text-white border border-black m-5 mx-[1100px] bg-red-500 px-2 w-20">
  Sign In
</button>

     </div> */}
    </>

    
    

    
  )
}

export default Header
