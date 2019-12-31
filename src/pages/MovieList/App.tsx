import React, { Component } from "react";
import * as R from "ramda";

import "./App.css";

import { getGenres, getNowPlaying, handleError } from "./api";
import Checkbox from "./components/Checkbox";
import Grid, { GridCell } from "./components/Grid";
import Film, { Movie } from "./components/Film";
import {
  selectedFn,
  selectedGenreIdsFn,
  genresInListFn,
  joinAvailableGenreNamesFn
} from "./utils";

export type Genre = {
  id: number;
  name: string;
  isChecked?: boolean;
};

interface IState {
  genres: Genre[];
  nowPlaying: Movie[];
  availableGenreNames: Genre[];
  updatedList: Movie[];
}

class App extends Component<{}, IState> {
  state = {
    genres: [],
    nowPlaying: [],
    availableGenreNames: [],
    updatedList: []
  };

  async componentDidMount() {
    // TODO promise chain order?
    await this.fetchData();
    this.fetchFilters();
  }

  async fetchData() {
    const [genres, genresErr] = await handleError(getGenres());
    const [nowPlaying, nowPlayingErr] = await handleError(getNowPlaying()); // Todo - reduce down copy of for genresInList

    if (genresErr) {
      throw new Error("Could not fetch genres");
    }
    if (nowPlayingErr) {
      throw new Error("Could not fetch playing list");
    }

    this.setState({
      genres: genres.data.genres,
      nowPlaying: nowPlaying.data.results
    });
  }

  fetchFilters = () => {
    const genresInList = (genresInListFn(
      this.state.nowPlaying
    ) as number[]) as [];
    const availableGenreNames = joinAvailableGenreNamesFn(
      this.state.genres,
      genresInList
    );

    this.setState({ availableGenreNames });
  };

  handleOnChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const item = e.target.id;
    const isChecked = e.target.checked;

    this.setState(
      (prevState: IState) => ({
        availableGenreNames: [
          ...prevState.availableGenreNames.map(genre => {
            return genre.id === +item ? { ...genre, isChecked } : genre;
          })
        ]
      }),
      () => this.updatePlayingList()
    );
  };

  updatePlayingList = () => {
    const selected = selectedFn(this.state.availableGenreNames) as Genre[];
    const selectedGenreIds = selectedGenreIdsFn(selected);

    const hasMatchingGenres = (n: Movie) =>
      R.length(R.intersection(selectedGenreIds, n.genre_ids as number[])) > 0;
    const updatedList = R.filter(hasMatchingGenres, this.state.nowPlaying);

    this.setState({ updatedList });
  };

  // TODO - should be one state domain.
  fetchList = () =>
    this.state.updatedList.length === 0
      ? this.state.nowPlaying
      : this.state.updatedList;

  render() {
    // TODO - create a render prop that handles data fetching
    if (!this.state.nowPlaying || this.state.nowPlaying.length === 0) {
      return null;
    }

    return (
      <div className="App">
        <div className="filters">
          <form>
            {this.state.availableGenreNames.length === 0 && (
              <div>
                Please set up an API key{" "}
                <a href="https://www.themoviedb.org/settings/api">here</a> and
                add to a .env file, as per .env.example.
              </div>
            )}

            {this.state.availableGenreNames.map((genre: Genre) => (
              <Checkbox
                key={genre.id}
                genre={genre}
                handleOnChangeFilter={this.handleOnChangeFilter}
                checked={genre.isChecked}
              />
            ))}
          </form>
        </div>

        <Grid>
          {this.fetchList()
            .sort((a: Movie, b: Movie) => b.popularity - a.popularity)
            .map((movie: Movie) => (
              <GridCell key={movie.id}>
                <Film movie={movie} />
              </GridCell>
            ))}
        </Grid>
      </div>
    );
  }
}

export default App;
