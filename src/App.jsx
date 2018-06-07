import React, { Component } from 'react';
import {
  getSampleMovies,
  getMoviesByQuery,
} from './api'
import {
  HOME,
  FAV_LIST,
  WATCH_LIST,
} from './constants'
import Header from './elements/Header'
import MoviesList from './elements/MoviesList'
import SimpleMovieList from './elements/SimpleMovieList'

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

  searchMovies = async (query) => {
    const movies = await getMoviesByQuery(query)
    this.setState({ movies })
  }

  isOnFavList = movieId => !!(this.state.favList.filter(movie => movie.id === movieId).length)

  isOnWatchList = movieId => !!(this.state.watchList.filter(movie => movie.id === movieId).length)

  toggleList = (movieId, list) => {
    const condition = list === WATCH_LIST ? this.isOnWatchList : this.isOnFavList
    if (!condition(movieId)) {
      this.setState(prevState => ({
        [list]: [
          ...prevState[list],
          ...prevState.movies.filter(movie => movie.id === movieId),
        ],
      }))
    } else {
      this.setState(prevState => ({
        [list]: [
          ...prevState[list].filter(movie => !(movie.id === movieId)),
        ],
      }))
    }
  }

  toggleWatchList = movieId => this.toggleList(movieId, WATCH_LIST)

  toggleFavourites = movieId => this.toggleList(movieId, FAV_LIST)

  renderCurrentView = () => {
    const {
      movies,
      favList,
      watchList,
      currentView,
    } = this.state

    const defaultProps = {
      toggleFavourites: this.toggleFavourites,
      toggleWatchList: this.toggleWatchList,
      isOnFavList: this.isOnFavList,
      isOnWatchList: this.isOnWatchList,
    }

    switch (currentView) {
      case FAV_LIST:
        return (
          <SimpleMovieList
            title='Favourites'
            movies={favList}
            {...defaultProps}
          />
        )
      case WATCH_LIST:
        return (
          <SimpleMovieList
            title='Watch List'
            movies={watchList}
            {...defaultProps}
          />
        )
      default:
        return (
          <MoviesList
            movies={movies}
            searchMovies={this.searchMovies}
            {...defaultProps}
          />
        )
    }
  }

  render() {
    const {
      favList,
      watchList,
    } = this.state

    return (
      <div className='parakeet'>
        <Header
          favCount={favList.length}
          listCount={watchList.length}
          setCurrentView={this.setCurrentView}
          wrapperClass='parakeet__header'
        />
        {this.renderCurrentView()}
      </div>
    );
  }
}

export default App;
