import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const Ftask = ({ ftask }) => {
  const { removeFtask } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span>Completed: {ftask.title} on {ftask.date} at {ftask.time}</span>
      <div>
        <button className="btn-delete task-btn" onClick={() => removeFtask(ftask.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </li>
  )
}

export default Ftask
