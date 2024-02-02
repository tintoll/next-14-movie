import styles from "../styles/movie-info.module.css";

const API_URL: string = "https://nomad-movies.nomadcoders.workers.dev/movies";
export async function getMovie(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  const URL = `${API_URL}/${id}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank" rel="noreferrer">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
