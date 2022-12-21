import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import User from '../user'
import UsersList from '../usersList'
import api from '../../api'

const Users = () => {
  const { userId } = useParams()

  const [users, setUsers] = useState()

  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data))
  }, [])

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToggleBookmark = (userId) => {
    setUsers(
      users.map((user) => {
        if (user._id === userId) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  return (
    <>
      {userId ? (
        <User id={userId} />
      ) : (
        <UsersList
          users={users}
          onDelete={handleDelete}
          onToggleBookmark={handleToggleBookmark}
        />
      )}
    </>
  )
}

export default Users
