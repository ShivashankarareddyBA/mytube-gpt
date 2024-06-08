import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <Header/>
      <div className='absolute'>
      {/* bg  img */}
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='bg img' />

      </div>
      <form className=' w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white'>
      <h1 className="font-bold text-2xl mb-1">Sign In</h1>
        <input type='text' placeholder='Email Address' className='p-2 my-2 w-full'/>
        <input type='password' placeholder='Password' className='p-2 my-2 w-full'/>
        <button className='p-2 my-4 bg-red-700 w-full'>Sign In</button>

      </form>

      
      
    </div>
  )
}

export default Login
