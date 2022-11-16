import React from 'react'

const Bookmark = ({ _id, isFavorite, ...rest }) => {
  const handleToggleBookmark = () => {
    rest.onToggleBookmark(_id)
  }

  return (
    <button className="btn btn-light" onClick={handleToggleBookmark}>
      <i className={'bi bi-bookmark' + (isFavorite ? '-fill' : '')}></i>
    </button>
  )
}

export default Bookmark