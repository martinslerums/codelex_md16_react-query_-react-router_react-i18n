import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useGetMovies = () => {
    return useQuery({
    queryKey: ["movies"],
    queryFn: () => {
      return axios.get("http://localhost:3004/movies").then(({data}) => {
        return data;
      });
    },
  });
}
 
