import { useGlobalContext } from './AppContext'


export default function CounterAction() {
  const { onIncreaseCounter, onResetCounter } = useGlobalContext()
  return (
    <div>
      <button onClick={onIncreaseCounter}>+</button>
      <button onClick={onResetCounter}>reset</button>
    </div>
  )
}