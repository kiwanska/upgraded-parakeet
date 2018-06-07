import React from 'react'
import PropTypes from 'prop-types'
import MovieBox from './MovieBox'

const SimpleMovieList = ({
  title,
  movies,
  vote_average,
  addToFavourites,
  addToWatchList,
  isOnFavList,
  isOnWatchList,
}) => (
  <section className='section'>
    <div className='container'>
      <h1 className='title is-5 has-text-left'>{title}</h1>
      <div className='columns'>
        {movies.map(movie => (
          <div key={movie.id} className='column is-half-tablet is-one-third-desktop'>
            <MovieBox
              key={movie.id}
              id={movie.id}
              backdrop_path={movie.backdrop_path}
              title={movie.title}
              release_date={movie.release_date}
              vote_average={movie.vote_average}
              addToFavourites={addToFavourites}
              addToWatchList={addToWatchList}
              isOnFavList={isOnFavList}
              isOnWatchList={isOnWatchList}
              narrow
            />
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default SimpleMovieList
