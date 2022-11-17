import React from 'react'
import Bookmark from './bookmark'
import Quality from './quality'

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  bookmark,
  ...rest
}) => {
  const handleDelete = () => {
    rest.onDelete(_id)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        {qualities.map((quality) => (
          <Quality key={quality._id} {...quality} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark
          _id={_id}
          isFavorite={bookmark}
          onToggleBookmark={rest.onToggleBookmark}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={handleDelete}>
          Удалить
        </button>
      </td>
    </tr>
  )
}

export default User
