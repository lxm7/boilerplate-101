import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3";

export interface IAxiosResponse<T = any> extends Promise<T> {}

export const handleError = (promise: Promise<IAxiosResponse<any>>) => {
  return promise
    .then(data => [data, undefined])
    .catch(error => Promise.resolve([undefined, error]));
};

export const getNowPlaying = () =>
  axios.get(
    `${BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`
  );

export const getGenres = () =>
  axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
  );
