import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ length }) => {
  const renderPhrase = (number) => {
    const endOfNum = number % 100 > 14 ? number % 10 : number % 100

    return [2, 3, 4].includes(endOfNum) ? 'человека тусанут' : 'человек тусанет'
  }

  return (
    <h2>
      <span className={'badge m-1 bg-' + (length > 0 ? 'primary' : 'danger')}>
        {length > 0
          ? `${length + ' ' + renderPhrase(length)} с тобой сегодня`
          : 'Никто с тобой не тусанет'}
      </span>
    </h2>
  )
}

SearchStatus.propTypes = {
  length: PropTypes.number.isRequired
}

export default SearchStatus
