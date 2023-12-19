import React from 'react'
import { useAuth } from '../context/AuthContext'

const TasksPage = () => {
    const {user} = useAuth()
  return (
    <div>
      Tasks Page
    </div>
  )
}

export default TasksPage
