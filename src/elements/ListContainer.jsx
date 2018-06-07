import React from 'react'
import PropTypes from 'prop-types'

const ListContainer = ({
  children,
  cta,
}) => {
  if (!children.length) {
    return (
      <section className='hero is-medium is-centered is-bold'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title is-4'>
              Nothing here!
            </h1>
            <h2 className='subtitle is-6'>
              <span role='img' aria-label='pointer'>👉</span>{cta}
            </h2>
          </div>
        </div>
      </section>
    )
  }

  return children
}

ListContainer.defaultProp = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default ListContainer
