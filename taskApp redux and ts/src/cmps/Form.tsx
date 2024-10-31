import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../store/slice/taskSlice'
import { addTask } from '../store/slice/taskSlice';
import { useAppDispatch } from '../store/hooks/hook';
export default function Form() {
  const dispatch = useAppDispatch()
  const [task, setTask] = useState<string>('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!task) {
      alert('pls enter a task')
      return
    }
    const taskObj: Task = {
      txt: task,
      status: 'incomplete',
      id: uuidv4()
    }
    dispatch(addTask(taskObj))
    setTask('')
  }
  return (
    <form className='mt-4 flex gap-5 px-14 py-10 bg-slate-800 rounded-md shadow-md justify-center' onSubmit={handleSubmit}>
      <input onChange={(e) => setTask(e.target.value)} type="text" className='rounded-md text-slate-800 capitalize px-3' value={task} />
      <button type='submit' className='bg-white text-slate-800 px-2 py-4 rounded-md capitalize font-medium'>add task</button>
    </form>
  )
}