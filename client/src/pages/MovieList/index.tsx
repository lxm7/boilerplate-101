import React, { useState, useEffect } from "react";
import * as R from "ramda";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import "./App.css";

// Common Components
import HolyGrailLayout, {
  HolyGrailSide,
  HolyGrailMain
} from "../../components/HolyGrailLayout";

// local components
import CheckboxGroup from "./components/CheckboxGroup";
import Film, { Movie } from "./components/Film";

// Utils
import {
  selectedFn,
  selectedGenreIdsFn,
  genresInListFn,
  joinAvailableGenreNamesFn
} from "./utils";
import { getGenres, getNowPlaying, handleError } from "./api";

export type Genre = {
  id: number;
  name: string;
  isChecked?: boolean;
};

const App = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [updatedList, setUpdatedList] = useState<Movie[]>([]);

  const [availableGenreNames, setAvailableGenreNames] = useState<Genre[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  // Get initial endpoints - all possible genres and all now playing films
  useEffect(() => {
    const fetchData = async () => {
      const [genres, genresErr] = await handleError(getGenres());
      const [nowPlaying, nowPlayingErr] = await handleError(getNowPlaying()); // Todo - reduce down copy of for genresInList

      if (genresErr) {
        throw new Error("Could not fetch genres");
      }
      if (nowPlayingErr) {
        throw new Error("Could not fetch playing list");
      }

      setGenres(genres.data.genres);
      setNowPlaying(nowPlaying.data.results);
    };
    fetchData();
  }, []);

  // Set our available filters derived from the current playing list
  useEffect(() => {
    const genresInList = (genresInListFn(nowPlaying) as number[]) as [];
    const availableGenreNames = joinAvailableGenreNamesFn(genres, genresInList);

    setAvailableGenreNames(availableGenreNames);
  }, [nowPlaying]);

  // Update playlist upon filtering
  useEffect(() => {
    const selected = selectedFn(availableGenreNames) as Genre[];
    const selectedGenreIds = selectedGenreIdsFn(selected);

    const hasMatchingGenres = (n: Movie) =>
      R.length(R.intersection(selectedGenreIds, n.genre_ids as number[])) > 0;

    const updated = R.filter(hasMatchingGenres, nowPlaying);

    setUpdatedList(updated);
  }, [availableGenreNames]);

  // Handle when a filter is selected and update the available genres we have
  const handleOnChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.name;
    const isChecked = e.target.checked;

    setAvailableGenreNames(
      availableGenreNames.map((genre: Genre) => {
        return genre.name === selected ? { ...genre, isChecked } : genre;
      })
    );
  };

  const fetchList = () => (updatedList.length === 0 ? nowPlaying : updatedList);

  if (!nowPlaying || nowPlaying.length === 0) {
    return null;
  }

  return (
    <div className="App">
      <HolyGrailLayout>
        <HolyGrailSide size={12}>
          <form>
            {availableGenreNames.length === 0 && (
              <div>
                Please set up an API key{" "}
                <a href="https://www.themoviedb.org/settings/api">here</a> and
                add to a .env file, as per .env.example.
              </div>
            )}

            <CheckboxGroup
              filters={availableGenreNames}
              handleOnChangeFilter={handleOnChangeFilter}
            />
          </form>
        </HolyGrailSide>

        <HolyGrailMain>
          <Grid
            container
            spacing={3}
            style={{
              margin: 0,
              width: "100%"
            }}
          >
            {fetchList()
              .sort((a: Movie, b: Movie) => b.popularity - a.popularity)
              .map((movie: Movie) => (
                <Grid key={movie.id} item sm={6} md={4} lg={3}>
                  <Box>
                    <Film movie={movie} />
                  </Box>
                </Grid>
              ))}
          </Grid>
        </HolyGrailMain>
      </HolyGrailLayout>
    </div>
  );
};

export default App;
