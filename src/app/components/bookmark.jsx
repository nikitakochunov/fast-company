import React from 'react'

const Bookmark = ({ isFavorite, ...rest }) => {
  return (
    <button className="btn btn-light" {...rest}>
      <i className={'bi bi-bookmark' + (isFavorite ? '-fill' : '')}></i>
    </button>
  )
}

export default Bookmark
