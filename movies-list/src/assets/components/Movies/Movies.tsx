import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import MoviesList from "../MoviesList/MoviesList";

export type Movie = {
  title: string;
  genre: string;
  director: string;
  year: number;
  rating: number;
  duration: number;
  comments: string[];
};

const Movies = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return axios.get("http://localhost:3004/movies").then((response) => {
        return response.data;
      });
    },
  });

  console.log(data);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <div>Error loading movies: {isError}</div>
      ) : (
        <div>
          <MoviesList getMovies={data} />
        </div>
      )}
    </>
  );
};

export default Movies;
