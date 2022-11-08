import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  const getCorrectWords = () => {
    let endOfNum = users.length % 100

    if (endOfNum > 14) {
      endOfNum %= 10
    }

    const words = [2, 3, 4].includes(endOfNum)
      ? 'человека тусанут'
      : 'человек тусанет'

    return words
  }

  const renderPhrase = () => {
    const doUsersExist = users.length > 0

    let classes = 'badge m-2 bg-'
    classes += doUsersExist ? 'primary' : 'danger'

    const words = getCorrectWords()

    let text = doUsersExist
      ? `${users.length} ${words} с тобой сегодня`
      : 'Никто с тобой не тусанет'

    return <span className={classes}>{text}</span>
  }

  const renderQualitiesBadges = (qualities) => {
    return qualities.map((quality) => {
      const classes = 'badge m-1 bg-' + quality.color

      return (
        <span key={quality._id} className={classes}>
          {quality.name}
        </span>
      )
    })
  }

  const renderUsersRows = () => {
    return users.map((user) => {
      return (
        <tr key={user._id}>
          <th scope="row">{user.name}</th>
          <td>{renderQualitiesBadges(user.qualities)}</td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}/5</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(user._id)}
            >
              Delete
            </button>
          </td>
        </tr>
      )
    })
  }

  const renderTable = () => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderUsersRows()}</tbody>
      </table>
    )
  }

  return (
    <>
      <h2>{renderPhrase()}</h2>
      {users.length > 0 && renderTable()}
    </>
  )
}

export default Users
