import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const MovieBox = ({
  id,
  backdrop_path,
  title,
  release_date,
  vote_average,
  overview,
  toggleFavourites,
  toggleWatchList,
  isOnFavList,
  isOnWatchList,
  narrow,
}) => (
  <div className='movie box'>
    <article className='media'>
      <div
        className={cx(
          'media-left',
          'movie__image-container',
          { 'movie__image-container--narrow': narrow },
        )}
      >
        <figure className='image is-5by3'>
          <img
            src={`https://image.tmdb.org/t/p/w300${backdrop_path}`}
            alt=''
          />
        </figure>
      </div>
      <div className='media-content'>
        <div className='content'>
          <div className={cx('columns', { 'is-multiline': narrow })}>
            <p className={cx('column', narrow ? 'is-12' : 'is-3')}>
              <strong className='title is-4'>{title}</strong><br />
              <small>{release_date}</small><br />
              <small>{vote_average}</small>
            </p>
            {overview &&
              <p className='column content is-small'>{overview}</p>
            }
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
                    onClick={() => toggleWatchList(id)}
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
                    onClick={() => toggleFavourites(id)}
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

MovieBox.defaultProps = {
  overview: '',
  narrow: false,
}

MovieBox.propTypes = {
  id: PropTypes.number.isRequired,
  backdrop_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string,
  toggleFavourites: PropTypes.func.isRequired,
  toggleWatchList: PropTypes.func.isRequired,
  isOnFavList: PropTypes.func.isRequired,
  isOnWatchList: PropTypes.func.isRequired,
  narrow: PropTypes.bool,
}

export default MovieBox
