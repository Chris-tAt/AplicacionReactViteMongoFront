import { useTasks } from "../context/TasksConstext"


function TasksCard({task}) {
   const {deleteTasks} = useTasks()


  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
         <header className="flex justify-between">
         <h1 className="text-2xl font-bold">{task.title}</h1>
          <div className="flex gap-x-2 items-center">
          <button onClick={()=> {
            deleteTasks(task._id)
          }}>delete</button>
          <button>edit</button>
          </div>
         </header>
          <p className="text-slate-300">{task.description}</p>
          <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
  )
}

export default TasksCard