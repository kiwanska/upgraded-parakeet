import React from 'react'
import PropTypes from 'prop-types'

const MovieBox = ({
  backdrop_path: imageUrl,
  title,
  release_date: releaseDate,
  vote_average: voteAverage,
  overview,
}) => (
  <div className='movie box'>
    <article className='media'>
      <div className='media-left'>
        <figure className='image is-128x128'>
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
            <div className='column is-2'>
              <nav className='level is-mobile'>
                <div className='level-left'>
                  <button className='button is-small is-success level-item'>
                    <span className='icon is-small'>
                      <i className='fas fa-reply' aria-hidden='true' />
                    </span>
                  </button>
                  <button className='button is-small is-success level-item' aria-label='like'>
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
  backdrop_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
}

export default MovieBox
