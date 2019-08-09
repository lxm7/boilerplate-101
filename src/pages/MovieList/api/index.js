import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

export const getNowPlaying = () =>
  axios
    .get(
      `${BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => data.data.results)
    .catch((err) => console.error(err));

export const getGenres = () =>
  axios
    .get(
      `${BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => data.data.genres)
    .catch((err) => console.error(err));
