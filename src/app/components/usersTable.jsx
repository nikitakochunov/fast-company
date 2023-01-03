import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from './bookmark'
import QualitiesList from './qualitiesList'
import Table from './table'
import { Link } from 'react-router-dom'

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  onToggleBookmark,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: {
      name: 'Имя',
      path: 'name',
      component: (user) => <Link to={'/users/' + user._id}>{user.name}</Link>
    },
    qualities: {
      name: 'Качества',
      component: (user) => <QualitiesList qualities={user.qualities} />
    },
    profession: { name: 'Профессия', path: 'profession.name' },
    completedMeetings: { name: 'Встретился, раз', path: 'completedMeetings' },
    rate: { name: 'Оценка', path: 'rate' },
    bookmark: {
      name: 'Избранное',
      path: 'bookmark',
      component: (user) => (
        <Bookmark
          isFavorite={user.bookmark}
          onClick={() => onToggleBookmark(user._id)}
        />
      )
    },
    delete: {
      component: (user) => (
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
          Удалить
        </button>
      )
    }
  }

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  )
}

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.shape({
    path: PropTypes.string,
    order: PropTypes.string.isRequired
  }).isRequired,
  onToggleBookmark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default UsersTable
