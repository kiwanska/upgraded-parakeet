import React from 'react'
import PropTypes from 'prop-types'
import MovieBox from './MovieBox'

const MoviesList = ({ movies }) => (
  <section className='section'>
    <div className='container'>
      {movies.map(movie => (
        <MovieBox
          key={movie.id}
          {...movie}
        />
      ))}
    </div>
  </section>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default MoviesList
