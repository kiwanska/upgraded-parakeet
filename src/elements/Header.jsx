import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  HOME,
  FAV_LIST,
  WATCH_LIST,
} from '../constants';

const Header = ({
  favCount,
  listCount,
  setCurrentView,
  wrapperClass,
}) => (
  <section className={cx('section', wrapperClass)}>
    <div className='container'>
      <header className='level'>
        <h1 className='title is-5'>
          My TV&nbsp;
          <span role='img' aria-label='kiwi, frogg, cactus'>🥦 🐸 🌵</span>
        </h1>
        <nav className='level'>
          <div className='field has-addons'>
            <p className='control'>
              <button
                className='button is-small is-success is-outlined'
                onClick={() => setCurrentView(HOME)}
              >
                HOME
              </button>
            </p>
            <p className='control'>
              <button
                className='button is-small is-success is-outlined'
                onClick={() => setCurrentView(FAV_LIST)}
              >
                FAVS&nbsp;({favCount})
              </button>
            </p>
            <p className='control'>
              <button
                className='button is-small is-success is-outlined'
                onClick={() => setCurrentView(WATCH_LIST)}
              >
                MY LIST&nbsp;({listCount})
              </button>
            </p>
          </div>
        </nav>
      </header>
    </div>
  </section>
)

Header.defaultProps = {
  wrapperClass: '',
}

Header.propTypes = {
  favCount: PropTypes.number.isRequired,
  listCount: PropTypes.number.isRequired,
  setCurrentView: PropTypes.func.isRequired,
  wrapperClass: PropTypes.string,
}

export default Header
