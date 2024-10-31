import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks/hook'
import { changeTaskStatus, setTasks, removeTask } from '../store/slice/taskSlice'

export default function Tasks() {
  const { tasks } = useAppSelector((state) => state.tasks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const tasksFromLocalStorage = localStorage.getItem('tasks')
    if (!tasksFromLocalStorage) {
      return
    } else {
      dispatch(setTasks(JSON.parse(tasksFromLocalStorage)))
    }
  }, []);
  return (
    <ul className='flex flex-col gap-3 mt-4'>
      {tasks.map(task => <li key={task.id} className='bg-white px-5 py-4  flex justify-between rounded-md '>
        <h1 className='text-3xl text-slate-800'>{task.txt}</h1>
        <div className='flex gap-5'>
          <input type="checkbox" checked={task.status === 'done'} onChange={() => dispatch(changeTaskStatus(task.id))} />
          <button className='text-red-300' onClick={() => dispatch(removeTask(task.id))}>X</button>
        </div>
      </li>)}
    </ul>
  )
}