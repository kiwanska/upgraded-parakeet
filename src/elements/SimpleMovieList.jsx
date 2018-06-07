import React from 'react'
import PropTypes from 'prop-types'
import MovieBox from './MovieBox'
import ListContainer from './ListContainer'
import SearchBar from './../components/SearchBar'

const SimpleMovieList = ({
  title,
  movies,
  toggleFavourites,
  toggleWatchList,
  isOnFavList,
  isOnWatchList,
  setFilterPhrase,
}) => (
  <section className='section'>
    <div className='container'>
      <h1 className='title is-5 has-text-left'>{title}</h1>
      <div className='level'>
        <SearchBar
          wrapperClass='level-item'
          onClick={setFilterPhrase}
          cta='Filter'
          placeholder='Filter the list'
        />
      </div>
      <div className='columns'>
        <ListContainer
          cta={`Add movies to your ${title} and see them here`}
        >
          {movies.map(movie => (
            <div key={movie.id} className='column is-half-tablet is-one-third-desktop'>
              <MovieBox
                key={movie.id}
                id={movie.id}
                backdrop_path={movie.backdrop_path}
                title={movie.title}
                release_date={movie.release_date}
                vote_average={movie.vote_average}
                toggleFavourites={toggleFavourites}
                toggleWatchList={toggleWatchList}
                isOnFavList={isOnFavList}
                isOnWatchList={isOnWatchList}
                narrow
              />
            </div>
          ))}
        </ListContainer>
      </div>
    </div>
  </section>
)

SimpleMovieList.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  toggleFavourites: PropTypes.func.isRequired,
  toggleWatchList: PropTypes.func.isRequired,
  isOnFavList: PropTypes.func.isRequired,
  isOnWatchList: PropTypes.func.isRequired,
  setFilterPhrase: PropTypes.func.isRequired,
}

export default SimpleMovieList
