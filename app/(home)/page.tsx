import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // 시간 소요되도록 만든 임시코드
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
}

// 서버에서 fetch 하기 위해서는 비동기로 만들어야 한다.
export default async function Page() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}
