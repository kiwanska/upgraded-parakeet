import React from 'react'
import PropTypes from 'prop-types'
import MovieBox from './MovieBox'

const MoviesList = ({
  movies,
  addToFavourites,
  addToWatchList,
  isOnFavList,
  isOnWatchList,
}) => (
  <section className='section'>
    <div className='container'>
      {movies.map(movie => (
        <MovieBox
          key={movie.id}
          {...movie}
          addToFavourites={addToFavourites}
          addToWatchList={addToWatchList}
          isOnFavList={isOnFavList}
          isOnWatchList={isOnWatchList}
        />
      ))}
    </div>
  </section>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  addToFavourites: PropTypes.func.isRequired,
  addToWatchList: PropTypes.func.isRequired,
  isOnFavList: PropTypes.func.isRequired,
  isOnWatchList: PropTypes.func.isRequired,
}

export default MoviesList
