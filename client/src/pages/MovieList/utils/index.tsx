import * as R from "ramda";
import { Genre } from "..";
import { Movie } from "../components/Film";

export const isChecked = (n: Genre) => n.isChecked as boolean;

export const selectedFn = (availableGenres: Genre[]) =>
  R.filter(isChecked, availableGenres);

export const selectedGenreIdsFn = (genres: Genre[]) =>
  R.map(R.prop("id"), genres);

export const genresInListFn = (nowPlaying = [] as Movie[]) =>
  R.reduce(
    (acc, curr) => R.uniq([...acc, ...curr.genre_ids]) as number[],
    [] as number[],
    nowPlaying
  );

export const joinAvailableGenreNamesFn = (
  genres: Genre[] = [],
  genresInList = [] as number[]
) => R.innerJoin((genre, id) => genre.id === id, genres, genresInList);
