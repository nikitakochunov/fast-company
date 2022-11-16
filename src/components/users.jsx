import React, { useState } from 'react'
import api from '../api'

// const Users = () => {
//   const [users, setUsers] = useState(api.users.fetchAll())

//   const handleDelete = (userId) => {
//     setUsers((prevState) => prevState.filter((user) => user._id !== userId))
//   }

//   const getCorrectWords = () => {
//     let endOfNum = users.length % 100

//     if (endOfNum > 14) {
//       endOfNum %= 10
//     }

//     const words = [2, 3, 4].includes(endOfNum)
//       ? 'человека тусанут'
//       : 'человек тусанет'

//     return words
//   }

//   const renderPhrase = () => {
//     const doUsersExist = users.length > 0

//     let classes = 'badge m-2 bg-'
//     classes += doUsersExist ? 'primary' : 'danger'

//     const words = getCorrectWords()

//     let text = doUsersExist
//       ? `${users.length} ${words} с тобой сегодня`
//       : 'Никто с тобой не тусанет'

//     return <span className={classes}>{text}</span>
//   }

//   const renderQualitiesBadges = (qualities) => {
//     return qualities.map((quality) => {
//       const classes = 'badge m-1 bg-' + quality.color

//       return (
//         <span key={quality._id} className={classes}>
//           {quality.name}
//         </span>
//       )
//     })
//   }

//   const renderUsersRows = () => {
//     return users.map((user) => {
//       return (
//         <tr key={user._id}>
//           <th scope="row">{user.name}</th>
//           <td>{renderQualitiesBadges(user.qualities)}</td>
//           <td>{user.profession.name}</td>
//           <td>{user.completedMeetings}</td>
//           <td>{user.rate}/5</td>
//           <td>
//             <button
//               className="btn btn-danger"
//               onClick={() => handleDelete(user._id)}
//             >
//               Delete
//             </button>
//           </td>
//         </tr>
//       )
//     })
//   }

//   const renderTable = () => {
//     return (
//       <table className="table">
//         <thead>
//           <tr>
//             <th scope="col">Имя</th>
//             <th scope="col">Качества</th>
//             <th scope="col">Профессия</th>
//             <th scope="col">Встретился, раз</th>
//             <th scope="col">Оценка</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>{renderUsersRows()}</tbody>
//       </table>
//     )
//   }

//   return (
//     <>
//       <h2>{renderPhrase()}</h2>
//       {users.length > 0 && renderTable()}
//     </>
//   )
// }

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const renderPhrase = (number) => {
    if (number > 4 && number < 15) return 'человек тусанет'
    const lastOne = Number(number.toString().slice(-1))
    if ([2, 3, 4].includes(lastOne)) return 'человека тусанут'
    if (lastOne === 1) return 'человек тусанет'
    return 'человек тусанет'
  }

  return (
    <>
      <h2>
        <span
          className={
            'badge m-1 bg-' + (users.length > 0 ? 'primary' : 'danger')
          }
        >
          {users.length > 0
            ? `${users.length} ${renderPhrase(users.length)} с тобой сегодня`
            : 'Никто с тобой не тусанет'}
        </span>
      </h2>

      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  {user.qualities.map((item) => (
                    <span
                      key={item._id}
                      className={'badge m-1 bg-' + item.color}
                    >
                      {item.name}
                    </span>
                  ))}
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(user._id)}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}

export default Users
