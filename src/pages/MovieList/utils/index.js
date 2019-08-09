import * as R from 'ramda';

export const isChecked = (n) => n.isChecked;

export const selectedFn = (availableGenreNames) => R.filter(isChecked, availableGenreNames);

export const selectedGenreIdsFn = (selected) => R.map(R.prop('id'), selected);

export const genresInListFn = (nowPlaying = []) =>
  R.reduce((acc, curr) => R.uniq([...acc, ...curr.genre_ids]), [], nowPlaying);

export const joinAvailableGenreNamesFn = (genres = [], genresInList = []) =>
  R.innerJoin((genre, id) =>
    genre.id === id,
    genres,
    genresInList,
  );