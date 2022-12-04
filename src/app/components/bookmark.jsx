import React from 'react'
import PropTypes from 'prop-types'

const Bookmark = ({ isFavorite, ...rest }) => {
  return (
    <button className="btn btn-light" {...rest}>
      <i className={'bi bi-bookmark' + (isFavorite ? '-fill' : '')}></i>
    </button>
  )
}

Bookmark.propTypes = {
  isFavorite: PropTypes.bool.isRequired
}

export default Bookmark
