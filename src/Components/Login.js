import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/formValidation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
 

  const handleButtonClick = () => {
   
    const message = checkValidData(email.current.value, password.current.value, );
    setErrorMessage(message);

    if (message) return;
    //signup  
    if(!isSignInForm) {
      //Sign up logic
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    } else {
      //Signin 
    }
  };

  const toggleSignInForm = () => {
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-2xl mb-1">
          {isSignInForm ? "Sign In" : "SignUp"}
        </h1>
        {!isSignInForm && (
          <input
          // ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full text-black"
          />
        )}
        {!isSignInForm && (
          <input
          // ref={phoneNumber}
            type="tel"
            placeholder="Phone Number"
            className="p-2 my-2 w-full text-black"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full text-black"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full text-black"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-2 my-4 bg-red-700 w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-sm py-4">
          <u onClick={toggleSignInForm} className="text-red-400 cursor-pointer">
            {isSignInForm
              ? " New to MyTube? SignUp Now"
              : "Al ready Registered. Sign In Now"}
          </u>
        </p>
      </form>
    </div>
  );
};

export default Login;
