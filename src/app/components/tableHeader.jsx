import React from 'react'
import PropTypes from 'prop-types'

const TableHeader = ({ columns, selectedSort, onSort }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc'
      })
    } else {
      onSort({ path: item, order: 'asc' })
    }
  }

  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && 'button' }}
            scope="column"
          >
            <span>{columns[column].name}</span>

            {columns[column].path === selectedSort.path && (
              <i
                className={
                  'bi m-2 bi-caret-' +
                  (selectedSort.order === 'desc' ? 'down-fill' : 'up-fill')
                }
              ></i>
            )}
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  columns: PropTypes.object.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired
}

export default TableHeader
