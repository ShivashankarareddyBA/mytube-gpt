import React from "react";
import logo from "../img/logo-color.png";

const Header = () => {
  return (
    <>
      <div className="absolute ml-20 mt-4 bg-gradient-to-b from-black z-10 opacity-80">
        {/* log image */}
        <img className="w-44" src={logo} alt="logo" />
      </div>
      <div className=" absolute ">
        <button
          onClick={"SignOut"}
          className=" font-bold text-red-400 mt-5 mx-[1280px]  px-2 w-20"
        >
          SignOut
        </button>
      </div>
    </>
  );
};

export default Header;
