import axios from "axios";

import { getNowPlaying, getGenres, BASE_URL } from ".";
import { firstMovieEntry, genre } from "../fixtures";

jest.mock("axios");

describe("axios api calls", () => {
  it("fetches getNowPlaying() successfully data from an API", async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(firstMovieEntry)
    );

    await expect(getNowPlaying()).resolves.toEqual(firstMovieEntry);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
  });

  it("fetches getNowPlaying() erroneously data from an API", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getNowPlaying()).rejects.toThrow(errorMessage);
  });

  it("fetches getGenres() successfully data from an API", async () => {
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(genre)
    );

    await expect(getGenres()).resolves.toEqual(genre);
    expect(axios.get).toHaveBeenCalledWith(
      `${BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
  });

  it("fetches getGenres() erroneously data from an API", async () => {
    const errorMessage = "Network Error";
    (axios.get as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(getGenres()).rejects.toThrow(errorMessage);
  });
});
