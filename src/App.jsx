import React, { Component } from 'react';
import { getSampleMovies } from './api'
import Header from './elements/Header'
import MoviesList from './elements/MoviesList'

class App extends Component {
  state = {
    movies: [],
    favourites: [],
    watchList: [],
  }

  componentDidMount() {
    this.fetchMovies()
  }

  fetchMovies = async () => {
    const movies = await getSampleMovies()
    this.setState({ movies })
  }

  render() {
    const {
      movies,
      favourites,
      watchList,
    } = this.state

    return (
      <div className='parakeet'>
        <Header
          favCount={favourites.length}
          listCount={watchList.length}
        />
        <MoviesList
          movies={movies}
        />
      </div>
    );
  }
}

export default App;
