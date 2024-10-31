import './App.css'
import { useAppSelector, useAppDispatch } from './hooks/hook'
import { decrement, increment, reset, setStatus } from './slice/counterSlice'
function App() {
  const { count, status } = useAppSelector((state) => state.counter)
  const dispatch = useAppDispatch()
  return (
    <>
      <h1>counter: {count}</h1>
      <h2>status: {status}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(setStatus('active'))}>set status active</button>
      <button onClick={() => dispatch(setStatus('inactive'))}>set status inactive</button>
    </>
  )
}

export default App
