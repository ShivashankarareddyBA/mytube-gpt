import React, { useRef } from "react";
import lang from "./../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch= useDispatch()
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async(movie)=>{
    // needto start
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="
      + movie+
      "&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json =await data.json();
      return json.results;
  }
  

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a Movie recommendation system and suggest some movie for the query: " +
      searchText.current.value +
      ". only give 5 movies, comma seperated like the example result give ahead. Example result: Gadar,Don, Inside out 2, stalin, Sringle ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices){
      //error page
    }
    // console.log(gptResults.choices?.[0]?.message?.content);
     const gptMovies = gptResults.choices?.[0]?.message?.content.split(",")
  
  const promiseArray = gptMovies.map (movie =>searchMovieTMDB(movie));
  
  const tmdbResults =await  Promise.all(promiseArray);
  //console.log(tmdbResults);
  dispatch(addGptMoviesResult({movieNames: gptMovies, movieResult:tmdbResults}));
  };//for each movies search in tbdm api


  return (
    <div className=" pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className= " w-full md:w-1/2  grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].getSearchPlaceholder}
          className="col-span-10 m-2 p-2 border border-gray-400"
        />
        <button
          className="col-span-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 m-2 p-2"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
