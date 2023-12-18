import styles from "./MovieDetails.module.css";
import { useGetMovie } from "./Hooks/useGetMovie";

const MovieDetails = () => {

  const {data: movie, isLoading, isError, error } = useGetMovie()

  const { title, genre, director, year, rating, duration, comments } =
    movie || {};

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : isError ? (
        <div>Error encountered: {error.message}</div>
      ) : (
        <div className={styles.movieWrapper}>
          <p className={styles.title}>{title}</p>
          <div className={styles.content}>
            <p className={styles.genre}>Genre: {genre}</p>
            <p className={styles.director}>Director: {director}</p>
            <p className={styles.year}>Year: {year}</p>
            <p className={styles.rating}>Rating: {rating}</p>
            <p className={styles.duration}>Duration: {duration} min</p>
          </div>
          {comments && (
            <div className={styles.commentsWrapper}>
              <p className={styles.comments}>Comments</p>
              <ul>
                {Object.entries(comments).map(([author, comment]) => (
                  <li key={author}>{`${author}: ${comment}`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
