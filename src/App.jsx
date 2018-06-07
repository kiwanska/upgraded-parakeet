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
    favListFilterPhrase: '',
    watchListFilterPhrase: '',
  }

  componentDidMount() {
    this.fetchMovies()
  }

  setCurrentView = currentView => this.setState({ currentView })

  setFilterPhrase = (list, filterPhrase) => {
    if (list === FAV_LIST) {
      this.setState({ favListFilterPhrase: filterPhrase })
    } else {
      this.setState({ watchListFilterPhrase: filterPhrase })
    }
  }

  fetchMovies = async () => {
    const movies = await getSampleMovies()
    this.setState({ movies })
  }

  searchMovies = async (query) => {
    if (!query) {
      this.fetchMovies()
    } else {
      const movies = await getMoviesByQuery(query)
      this.setState({ movies })
    }
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

  filterMovies = (movies, filterPhrase) => {
    if (!filterPhrase) return movies
    return movies.filter(movie => movie.title.toLowerCase().includes(filterPhrase.toLowerCase()))
  }

  renderCurrentView = () => {
    const {
      movies,
      favList,
      watchList,
      currentView,
      favListFilterPhrase,
      watchListFilterPhrase,
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
            movies={this.filterMovies(favList, favListFilterPhrase)}
            setFilterPhrase={searchPhrase => this.setFilterPhrase(FAV_LIST, searchPhrase)}
            {...defaultProps}
          />
        )
      case WATCH_LIST:
        return (
          <SimpleMovieList
            title='Watch List'
            movies={this.filterMovies(watchList, watchListFilterPhrase)}
            setFilterPhrase={searchPhrase => this.setFilterPhrase(WATCH_LIST, searchPhrase)}
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
