import React, { useEffect, useState } from 'react'
import Users from './components/users'
import api from './api'

const App = () => {
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
    <div>
      {users && (
        <Users
          onDelete={handleDelete}
          onToggleBookmark={handleToggleBookmark}
          users={users}
        />
      )}
    </div>
  )
}

export default App
