import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-videopt-40 px-6 pt-[20%] absolute bg-gradient -to-r from-gray-300 text-white">
      <h1 className="px-12 text-2xl font-bold my-2 text-white">{title}</h1>
      <p className="px-12 w-1/3 my-2 text-sm">{overview}</p>
      <div className=" px-14   ">
        <button className="mx-2  rounded-lg border border-gray-600 bg-white text-black w-28 font-bold hover:opacity-80 ">
          
          Play
        </button>
        <button className="mx-2 rounded-lg border border-gray-600 bg-gray-500 text-white w-28 font-bold hover:bg-opacity-80">
          
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
