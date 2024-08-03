import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import { BG_IMG_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <>
    
      <div className="fixed -z-10">
        <img  className="h-auto md:h-full"   src={BG_IMG_URL} alt="bgIMG" />
      </div>
      <div className="">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
    </>
  );
};

export default GPTSearch;
