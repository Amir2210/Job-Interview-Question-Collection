import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type TaskStatus = 'done' | 'incomplete'

export type Task = {
  txt: string,
  status: TaskStatus,
  id: string
}

type TasksState = {
  tasks: Task[] | []
}

const initialState: TasksState = {
  tasks: [],
}

const taskSlicer = createSlice({
  name: 'task',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks = [action.payload, ...state.tasks]
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = [...state.tasks].filter(task => task.id !== action.payload)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeTaskStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload)
      if (task) {
        task.status = task.status === 'done' ? 'incomplete' : 'done';
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    }
  }
})


export const { addTask, changeTaskStatus, setTasks, removeTask } = taskSlicer.actions;
export default taskSlicer.reducer;
