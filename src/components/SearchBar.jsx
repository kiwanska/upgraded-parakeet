import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

class SearchBar extends Component {
  state = {
    searchPhrase: '',
  }

  componentDidMount() {
    window.addEventListener('keydown', ({ key }) => {
      if (key === 'Enter') this.handleSubmit()
    })
  }

  handleChange = ({ target }) => this.setState({ searchPhrase: target.value })

  handleSubmit = () => this.props.searchMovies(this.state.searchPhrase)

  render() {
    const { wrapperClass } = this.props

    return (
      <div className={wrapperClass}>
        <div className={cx('field', 'has-addons')}>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder='Find movies'
              onChange={this.handleChange}
            />
          </div>
          <div className='control'>
            <button
              className='button is-success'
              onClick={this.handleSubmit}
              type='submit'
            >
              Search
            </button>
          </div>
        </div>
      </div>
    )
  }
}

SearchBar.defaultProps = {
  wrapperClass: '',
}

SearchBar.propTypes = {
  wrapperClass: PropTypes.string,
  searchMovies: PropTypes.func.isRequired,
}

export default SearchBar
