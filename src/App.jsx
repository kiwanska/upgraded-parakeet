import React, { Component } from 'react';
import { getSampleMovies } from './api'
import {
  HOME,
  FAV_LIST,
  WATCH_LIST,
} from './constants'
import Header from './elements/Header'
import MoviesList from './elements/MoviesList'
import WatchList from './elements/WatchList'
import FavList from './elements/FavList'

class App extends Component {
  state = {
    movies: [],
    favList: [],
    watchList: [],
    currentView: HOME,
  }

  componentDidMount() {
    this.fetchMovies()
  }

  setCurrentView = currentView => this.setState({ currentView })

  fetchMovies = async () => {
    const movies = await getSampleMovies()
    this.setState({ movies })
  }

  isOnFavList = movieId => !!(this.state.favList.filter(movie => movie.id === movieId).length)

  isOnWatchList = movieId => !!(this.state.watchList.filter(movie => movie.id === movieId).length)

  addToFavourites = (movieId) => {
    if (!this.isOnFavList(movieId)) {
      this.setState(prevState => ({
        favList: [...prevState.favList, ...prevState.movies.filter(movie => movie.id === movieId)],
      }))
    }
  }

  addToWatchList = (movieId) => {
    if (!this.isOnWatchList(movieId)) {
      this.setState(prevState => ({
        watchList: [...prevState.watchList, ...prevState.movies.filter(movie => movie.id === movieId)],
      }))
    }
  }


  renderCurrentView = () => {
    const {
      movies,
      favList,
      watchList,
      currentView,
    } = this.state

    switch (currentView) {
      case FAV_LIST:
        return (
          <FavList
            movies={favList}
          />
        )
      case WATCH_LIST:
        return (
          <WatchList
            movies={watchList}
          />
        )
      default:
        return (
          <MoviesList
            movies={movies}
            addToFavourites={this.addToFavourites}
            addToWatchList={this.addToWatchList}
            isOnFavList={this.isOnFavList}
            isOnWatchList={this.isOnWatchList}
          />
        )
    }
  }

  render() {
    const {
      favList,
      watchList,
    } = this.state

    console.log(favList)

    return (
      <div className='parakeet'>
        <Header
          favCount={favList.length}
          listCount={watchList.length}
          setCurrentView={this.setCurrentView}
        />
        {this.renderCurrentView()}
      </div>
    );
  }
}

export default App;
