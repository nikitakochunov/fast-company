import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import api from '../api'
import QualitiesList from './qualitiesList'
import { useHistory } from 'react-router-dom'

const UserPage = ({ userId }) => {
  const history = useHistory()
  const [user, setUser] = useState()

  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data))
  }, [])

  const handleClick = () => {
    history.push('/users')
  }

  if (user) {
    return (
      <div className="card w-50 m-4">
        <div className="card-header">Карточка пользователя</div>
        <div className="card-body">
          <h1 className="card-title">{user.name}</h1>
          <h2 className="card-subtitle text-muted mb-2">
            Профессия: {user.profession.name}
          </h2>
          <QualitiesList qualities={user.qualities} />
          <p className="card-text mt-2">
            Встреч завершено: {user.completedMeetings}
          </p>
          <h2>Оценка: {user.rate}</h2>
          <button className="btn btn-primary" onClick={handleClick}>
            Все пользователи
          </button>
        </div>
      </div>
    )
  } else {
    return <h1>Загрузка...</h1>
  }
}

UserPage.propTypes = {
  userId: PropTypes.string.isRequired
}

export default UserPage
