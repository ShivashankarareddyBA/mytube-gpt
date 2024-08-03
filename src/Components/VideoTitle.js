import React from "react";

const VideoTitle = ({ title, overview }) => {

  const bgvClick = ()=>{

  }

  return (
    <div className=" w-screen aspect-vide opt-40 px-2 md:px-6 pt-[20%] absolute bg-gradient -to-r from-gray-300 text-white">
      <h1 className="text-xl px-12 md:text-2xl font-bold my-2 text-white">
        {title}
      </h1>
      <p className="hidden md:inline-block px-12 w-1/3 my-2 text-sm">
        {overview}
      </p>
      <div className=" px-14 my-2 md:m-0 ">
        <button onClick={bgvClick}
          className="mx-2  rounded-lg border border-gray-600 bg-white text-black w-28 font-bold hover:opacity-80 "
          
        >
          Play
        </button>
        <button className=" hidden md:inline-block mx-2 rounded-lg border border-gray-600 bg-gray-500 text-white w-28 font-bold hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
