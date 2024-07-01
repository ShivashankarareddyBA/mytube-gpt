import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-15">
      <h1 className="px-12 text-2xl font-bold my-2 text-gray-800">{title}</h1>
      <p className="px-12 w-1/3 my-2 text-sm">{overview}</p>
      <div className=" px-14   ">
        <button className="mx-2  rounded-lg border border-gray-600 bg-white text-black w-28 font-bold bg-opacity-50">
          
          ▶ Play
        </button>
        <button className="mx-2 rounded-lg border border-gray-600 bg-gray-500 text-white w-28 font-bold bg-opacity-50">
          
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
