import React from "react";

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

const Film: React.SFC<FilmProps> = ({ movie }) => (
  <div className="listing__content">
    <h3 className="h3">{movie.title}</h3>

    <p>{movie.genre_ids.join("/")}</p>

    <img
      className="img"
      alt={movie.title}
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    />
  </div>
);

export default Film;
