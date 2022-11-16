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
    const userIndex = users.findIndex((user) => user._id === userId)
    const newUsers = [...users]
    newUsers[userIndex].bookmark = !newUsers[userIndex].bookmark

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
