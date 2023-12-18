import MoviesList from "../../MoviesList/MoviesList";
import { useGetMovies } from "./Hooks/useGetMovies";
import { useDeleteMovie } from "./Hooks/useDeleteMovie";

export type Movie = {
  id: number
  title: string;
  genre: string;
  director: string;
  year: number;
  rating: number;
  duration: number;
  comments: {
    [author: string]: string
  };
};

const Movies = () => {
  const { data: movies, isLoading, isError } = useGetMovies()
  const {mutateAsync: deleteMovie} = useDeleteMovie()

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <div>Error loading movies: {isError}</div>
      ) : (
        <div>
          <MoviesList getMoviesArray={movies} onDelete={deleteMovie} />
        </div>
      )}
    </>
  );
};

export default Movies;
