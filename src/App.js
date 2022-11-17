import React, { useState } from 'react'
import Users from './components/users'
import SearchStatus from './components/searchStatus'
import api from './api'

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToggleBookmark = (userId) => {
    const newUsers = users.map((user) => {
      if (user._id === userId) {
        user.bookmark = !user.bookmark
      }

      return user
    })

    setUsers(newUsers)
  }

  return (
    <div>
      <h2>
        <SearchStatus length={users.length} />
      </h2>
      {users.length > 0 && (
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
