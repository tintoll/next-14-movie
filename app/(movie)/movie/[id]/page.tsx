import React, { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface IMovieDetailProps {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IMovieDetailProps) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

const MovieDetail = async ({ params: { id } }: IMovieDetailProps) => {
  return (
    <>
      <Suspense fallback={<h2>Loading Movie Info...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h2>Loading Movie videos...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
    </>
  );
};

export default MovieDetail;
