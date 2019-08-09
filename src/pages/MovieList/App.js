import React, {Component} from 'react';
import * as R from 'ramda';

import './App.css';

import {getGenres, getNowPlaying} from './api';
import Checkbox from './components/Checkbox';
import Grid, {GridCell} from './components/Grid';
import Film from './components/Film';
import {selectedFn, selectedGenreIdsFn, genresInListFn, joinAvailableGenreNamesFn } from './utils';

// https://zone.github.io/frontend/movie-listing

class App extends Component {
  state = {
    genres: [],
    nowPlaying: [],
    availableGenreNames: [],
    updatedList: [],
  }

  async componentDidMount() {
    // TODO promise chain order?
    await this.fetchData()
    this.fetchFilters()
  }

  async fetchData() {
    const genres = await getGenres()
    const nowPlaying = await getNowPlaying() // Todo - reduce down copy of for genresInList

    this.setState({genres, nowPlaying})
  }

  fetchFilters = () => {
    const genresInList = genresInListFn(this.state.nowPlaying) // TODO - reduce/get from await getNowPlaying() 
    const availableGenreNames = joinAvailableGenreNamesFn(this.state.genres, genresInList); 

    this.setState({availableGenreNames})
  }

  handleOnChangeFilter = (e) => {
    const item = e.target.id;
    const isChecked = e.target.checked;

    this.setState(prevState => ({
      availableGenreNames: [
        ...prevState.availableGenreNames.map(genre => {
          return genre.id === +item ? {...genre, isChecked} : genre
        }),
      ],
    }), () => this.updatePlayingList());
  }

  updatePlayingList = () => {
    const selected = selectedFn(this.state.availableGenreNames);
    const selectedGenreIds = selectedGenreIdsFn(selected);

    const hasMatchingGenres = (n) => R.length(R.intersection(selectedGenreIds, n.genre_ids)) > 0;
    const updatedList = R.filter(hasMatchingGenres, this.state.nowPlaying);

    this.setState({updatedList});
  }

  // TODO - should be one state domain. 
  fetchList = () => this.state.updatedList.length === 0
    ? this.state.nowPlaying
    : this.state.updatedList

  render() {
    // TODO - create a render prop that handles data fetching
    if (!this.state.nowPlaying || this.state.nowPlaying.length === 0) return null;

    return (
      <div className='App'>
        <div className='filters'>
          <form>
            {this.state.availableGenreNames.map(genre => (
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
            .sort((a, b) => b.popularity - a.popularity)
            .map(movie => (
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
