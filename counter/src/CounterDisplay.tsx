import { useGlobalContext } from './AppContext'


export default function CounterDisplay() {
  const { counter, color, handleChangeColor } = useGlobalContext()
  return (
    <button onClick={handleChangeColor} style={{ color }}>{counter}</button>
  )
}