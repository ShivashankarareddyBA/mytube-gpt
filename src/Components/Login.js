import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

const [isSignInForm, setIsSignInForm] = useState(true);

const toggleSignInForm =()=>{
  setIsSignInForm(!isSignInForm);
};

  return (
    <div>
      <Header />
      <div className="absolute">
        {/* bg  img */}
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg img"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-2xl mb-1">{isSignInForm? "Sign In" : "SignUp"}</h1>
        {!isSignInForm &&<input
          type="text"
          placeholder="Full Name"
          className="p-2 my-2 w-full"
        />}
        {!isSignInForm &&<input
          type="num"
          placeholder="Phone Number"
          className="p-2 my-2 w-full"
        />}
        
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full"
        />
        <button className="p-2 my-4 bg-red-700 w-full">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="text-sm py-4">
          Are you new to MyTube?
          <u onClick={toggleSignInForm} className="text-red-400 cursor-pointer">
            
            { isSignInForm ? "New to MyTube? SignUp Now" :"Allready Registered. Sign In Now"}
          </u>
        </p>
      </form>
    </div>
  );
};

export default Login;
