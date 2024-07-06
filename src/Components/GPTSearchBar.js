import React from "react";
import lang from "./../utils/languageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2  grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].getSearchPlaceholder}
          className="col-span-10 m-2 p-2 border border-gray-400"
        />
        <button className="col-span-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 m-2 p-2">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
