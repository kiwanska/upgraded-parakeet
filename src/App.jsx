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
        />
        {this.renderCurrentView()}
      </div>
    );
  }
}

export default App;
