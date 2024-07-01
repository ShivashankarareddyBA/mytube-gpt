import { useDispatch } from "react-redux";
import {API_OPTIONS} from "../utils/constants"
import {addTrailerVideo} from "../utils/movieSlice"
import { useEffect } from "react";

const useMovieTrailer = () => {
    const dispatch = useDispatch();

    const getMoviewVidos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/1022789/videos?language=en-US",
        API_OPTIONS
      );
  
      const json = await data.json();
      console.log(json);
  
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getMoviewVidos();
    }, []);
  
}

export default useMovieTrailer
