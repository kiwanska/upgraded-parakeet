import React from 'react'
import PropTypes from 'prop-types'
import SearchBar from './../components/SearchBar'
import MovieBox from './MovieBox'
import ListContainer from './ListContainer'

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
          onClick={searchMovies}
          cta='Search'
          placeholder='Find movies'
        />
      </div>
      <ListContainer
        cta='Nothing was found, try another phrase!'
      >
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
      </ListContainer>
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
