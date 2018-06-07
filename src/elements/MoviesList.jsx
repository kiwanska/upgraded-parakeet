import React from 'react'
import PropTypes from 'prop-types'

const MoviesList = ({ movies }) => (
  <section className='section'>
    <div className='container'>
      {movies.map(movie => (
        <div className='movie box' key={movie.id}>
          <article className='media'>
            <div className='media-left'>
              <figure className='image is-128x128'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt=''
                />
              </figure>
            </div>
            <div className='media-content'>
              <div className='content'>
                <div className='columns'>
                  <p className='column is-3'>
                    <strong className='title is-4'>{movie.title}</strong><br/>
                    <small>{movie.release_date}</small><br/>
                    <small>{movie.vote_average}</small>
                  </p>
                  <p className='column content is-small'>{movie.overview}</p>
                  <div className='column is-2'>
                    <nav className='level is-mobile'>
                      <div className='level-left'>
                        <button className='button level-item'>
                          <span className='icon is-small'>
                            <i className='fas fa-reply' aria-hidden='true' />
                          </span>
                        </button>
                        <button className='button level-item' aria-label='like'>
                          <span className='icon is-small'>
                            <i className='fas fa-heart' aria-hidden='true' />
                          </span>
                        </button>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  </section>
)

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}

export default MoviesList
