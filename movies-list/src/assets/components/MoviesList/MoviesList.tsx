import { Link } from "react-router-dom";
import { Movie } from "../Pages/Movies/Movies";
import styles from "./MoviesList.module.css"

type MoviesProps = {
  getMoviesArray: Movie[];
  onDelete: (id: number) => void
};

const MoviesList = ({ getMoviesArray, onDelete }: MoviesProps) => {

  console.log("from MovieList:", getMoviesArray);
  return (
    <div className={styles.moviesList}>
      {getMoviesArray.map(({ title, id, genre, year, rating }: Movie) => (
        <div className={styles.movieCard} key={id}>
          <h3>{title}</h3>
          <div>
            <span className={styles.movieDetail}>Movie genre: {genre}</span>
            <br />
            <span className={styles.movieDetail}>Year: {year}</span>
          </div>
          <h5 className={styles.rating}>Rating {rating}</h5>
          <Link to={`/movies/${id}`} className={styles.previewLink}>
            <span>Preview movie</span>
          </Link>
          <button type="button" onClick={() => onDelete(id)} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
  
};

export default MoviesList;
