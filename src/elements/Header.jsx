import React from 'react'
import PropTypes from 'prop-types'

const Header = ({
  favCount,
  listCount,
}) => (
  <section className='section'>
    <div className='container'>
      <header className='header level'>
        <h1 className='header__title title is-5'>My TV 🥝 🐸 🌵</h1>
        <nav className='level'>
          <div className='field has-addons'>
            <p className='control'>
              <button className='button is-small is-success is-outlined'>
                HOME
              </button>
            </p>
            <p className='control'>
              <button className='button is-small is-success is-outlined'>
                FAVS&nbsp;({favCount})
              </button>
            </p>
            <p className='control'>
              <button className='button is-small is-success is-outlined'>
                MY LIST&nbsp;({listCount})
              </button>
            </p>
          </div>
        </nav>
      </header>
    </div>
  </section>
)

Header.propTypes = {
  favCount: PropTypes.number.isRequired,
  listCount: PropTypes.number.isRequired,
}

export default Header
