import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useGetMovie = () => {
    const { id } = useParams();

    return useQuery({
        queryKey: ["movies", id],
        queryFn: () => {
          return axios
            .get(`http://localhost:3004/movies/${id}`)
            .then((response) => {
              return response.data;
            });
        },
      });
    
}
