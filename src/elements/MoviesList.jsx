import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './../components/SearchBar'
import MovieBox from './MovieBox'

const MoviesList = ({
  movies,
  toggleFavourites,
  toggleWatchList,
  isOnFavList,
  isOnWatchList,
  searchMovies,
}) => (
  <section className='section'>
    <div className='container'>
      <div className='level'>
        <SearchBar
          wrapperClass='level-item'
          searchMovies={searchMovies}
        />
      </div>
      {movies.map(movie => (
        <MovieBox
          key={movie.id}
          {...movie}
          toggleFavourites={toggleFavourites}
          toggleWatchList={toggleWatchList}
          isOnFavList={isOnFavList}
          isOnWatchList={isOnWatchList}
        />
      ))}
    </div>
  </section>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  toggleFavourites: PropTypes.func.isRequired,
  toggleWatchList: PropTypes.func.isRequired,
  isOnFavList: PropTypes.func.isRequired,
  isOnWatchList: PropTypes.func.isRequired,
  searchMovies: PropTypes.func.isRequired,
}

export default MoviesList
