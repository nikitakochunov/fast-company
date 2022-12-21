import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import QualitiesList from './qualitiesList'
import api from '../api'
import PropTypes from 'prop-types'

const User = ({ id }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    api.users.getById(id).then((data) => setUser(data))
  }, [])

  return (
    <>
      {user ? (
        <div>
          <h1>{user.name}</h1>
          <h2>Профессия: {user.profession.name}</h2>
          <QualitiesList qualities={user.qualities} />
          <p>Completed Meetings: {user.completedMeetings}</p>
          <h2>Rate: {user.rate}</h2>
          <Link to="/users" className="btn btn-primary">
            Все пользователи
          </Link>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  )
}

User.propTypes = {
  id: PropTypes.string.isRequired
}

export default User
