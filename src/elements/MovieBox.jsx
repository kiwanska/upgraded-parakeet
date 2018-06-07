import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MovieBox = ({
  id,
  backdrop_path: imageUrl,
  title,
  release_date: releaseDate,
  vote_average: voteAverage,
  overview,
  addToFavourites,
  addToWatchList,
  isOnFavList,
  isOnWatchList,
}) => (
  <div className='movie box'>
    <article className='media'>
      <div className='media-left movie__image-container'>
        <figure className='image is-5by3'>
          <img
            src={`https://image.tmdb.org/t/p/w300${imageUrl}`}
            alt=''
          />
        </figure>
      </div>
      <div className='media-content'>
        <div className='content'>
          <div className='columns'>
            <p className='column is-3'>
              <strong className='title is-4'>{title}</strong><br/>
              <small>{releaseDate}</small><br/>
              <small>{voteAverage}</small>
            </p>
            <p className='column content is-small'>{overview}</p>
            <div className='column is-narrow'>
              <nav className='level is-mobile'>
                <div className='level-right'>
                  <button
                    className={cx(
                      'button',
                      'is-small',
                      { 'is-success': isOnWatchList(id) },
                      'level-item',
                    )}
                    aria-label='add to watch list'
                    onClick={() => addToWatchList(id)}
                  >
                    <span className='icon is-small'>
                      <i className='fas fa-plus' aria-hidden='true' />
                    </span>
                  </button>
                  <button
                    className={cx(
                      'button',
                      'is-small',
                      { 'is-success': isOnFavList(id) },
                      'level-item',
                    )}
                    aria-label='add to favourites'
                    onClick={() => addToFavourites(id)}
                  >
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
)

MovieBox.propTypes = {
  id: PropTypes.number.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  addToFavourites: PropTypes.func.isRequired,
  addToWatchList: PropTypes.func.isRequired,
  isOnFavList: PropTypes.func.isRequired,
  isOnWatchList: PropTypes.func.isRequired,
}

export default MovieBox
