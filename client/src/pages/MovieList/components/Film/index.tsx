import React, { useMemo } from "react";
import Img from "react-image";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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

const Film: React.SFC<FilmProps> = ({ movie }: FilmProps) => {
  const getMovieGenreIds = useMemo(() => movie.genre_ids.join("/"), [
    movie.genre_ids
  ]);

  return (
    <div className="listing__content">
      <h2 className="h2">{movie.title}</h2>

      <p>{`Movie Genres: ${getMovieGenreIds}`}</p>
      <Img
        src={`${BASE_URL}${movie.poster_path}`}
        loader={
          <div
            style={{
              width: "50%",
              minHeight: "190px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Loader type="TailSpin" color="gray" height={40} width={40} />
          </div>
        }
        unloader={
          <div
            style={{
              width: "50%",
              minHeight: "190px",
              background: "#ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          />
        }
      />
    </div>
  );
};

export default Film;
