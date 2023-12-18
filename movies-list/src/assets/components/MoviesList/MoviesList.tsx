import { Movie } from "../Movies/Movies";

type MoviesProps = {
getMovies: Movie []
}

const MoviesList = ({getMovies}: MoviesProps) => {

    // const { title  } = getMovies

    console.log("from MovieList:", getMovies)
    return ( 
        <div>
            {getMovies.map((movie: Movie) => (
                <h1>{movie.title}</h1>
            )
            )}
        </div>
     );
}
 
export default MoviesList;