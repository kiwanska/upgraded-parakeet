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

  handleSubmit = () => this.props.onClick(this.state.searchPhrase)

  render() {
    const {
      wrapperClass,
      cta,
      placeholder,
    } = this.props

    return (
      <div className={wrapperClass}>
        <div className={cx('field', 'has-addons')}>
          <div className='control'>
            <input
              className='input'
              type='text'
              placeholder={placeholder}
              onChange={this.handleChange}
            />
          </div>
          <div className='control'>
            <button
              className='button is-success'
              onClick={this.handleSubmit}
              type='submit'
            >
              {cta}
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
  onClick: PropTypes.func.isRequired,
  cta: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default SearchBar
