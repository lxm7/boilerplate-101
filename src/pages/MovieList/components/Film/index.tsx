import React, { useMemo } from "react";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type FilmProps = {
  movie: Movie;
};

const BASE_URL = "https://image.tmdb.org/t/p/w500";

const Film: React.SFC<FilmProps> = ({ movie }) => {
  const getMovieGenreIds = useMemo(() => movie.genre_ids.join("/"), [
    movie.genre_ids
  ]);

  return (
    <div className="listing__content">
      <h3 className="h3">{movie.title}</h3>

      <p>{getMovieGenreIds}</p>

      <img
        className="img"
        alt={movie.title}
        src={`${BASE_URL}${movie.poster_path}`}
      />
    </div>
  );
};

export default Film;
