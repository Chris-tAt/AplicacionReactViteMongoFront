import React, { useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { useTasks } from '../context/TasksConstext'

const TasksPage = () => {
    const {getTasks, tasks} = useTasks()

    useEffect(() => {
      getTasks()
    }, [])
    if (tasks.length === 0) return (<h1>No hay tareas</h1>) 
  return (
    <div>
      {
        tasks.map(tasks => {
          <div key={tasks._id}>
            <h1>{tasks.title}</h1>
            <p>{tasks.description}</p>
          </div>
        })
      }
    </div>
  )
}

export default TasksPage
