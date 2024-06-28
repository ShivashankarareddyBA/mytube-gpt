import Header from "./Header";
import MovieTitle from "./MovieTitle";
import MovieTrailer from "./MovieTrailer";
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
  useNowPlayingMovies();
  

  return (
    <div>
      <Header />
      <MovieTitle />
      <MovieTrailer />
    </div>
  );
};

export default Browse;
