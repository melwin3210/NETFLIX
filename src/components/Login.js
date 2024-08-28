import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm]= useState(true)
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)

  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_small.jpg"
          alt="Logo"
        ></img>
      </div>
      <form className="w-4/12 absolute p-12 my-32 mx-auto right-0 left-0 text-white rounded-lg bg-black bg-opacity-80">
      <h1 className="font-bold text-3xl py-4">{isSignInForm?'Sign In' : 'Sign Up'}</h1>
      {!isSignInForm && <input type="test" placeholder="Full Name" className="p-3 my-4 w-full bg-gray-700"></input> }
        <input type="test" placeholder="Email Address" className="p-3 my-4 w-full bg-gray-700"></input>
        <input type="test" placeholder="Password" className="p-3 my-4 w-full bg-gray-700"></input>
        <button className="p-3 my-6 bg-red-700 w-full rounded-lg">{isSignInForm?'Sign In' : 'Sign Up'}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?'New to Netflix? Sign Up Now.' : 'Already registered? Sign In Now.'}</p>
      </form>
    </div>
  );
};

export default Login;
