import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { add1, reset, addCustom } from './features/counter.slice'
function App() {
  const dispatch = useDispatch()
  const counter = useSelector((myStore) => myStore.counterSlice.counter)
  const addCustomValue = () => {
    const value = prompt('Enter number')
    dispatch(addCustom({ value: Number(value) }))
  }
  return (
    <>
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(add1())}>+</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={addCustomValue}>enter number to add</button>
    </>
  )
}

export default App
