import './App.css'
import { useRef, useState } from 'react'

function App() {
  const valueRef = useRef(0);
  const inputRef = useRef(null)
  const [color, setColor] = useState('blue')

  const handleClick = () => {
    valueRef.current += 1
    console.log("Saved Value:", valueRef.current)
    if (valueRef.current > 5) {
      valueRef.current = 0
    }
  }

  const consoleText = () => {
    console.log(inputRef.current.value)
  }

  //make reRender the whole cmp cause we using useState hook
  const changeTextColor = () => {
    inputRef.current.focus()
    setColor(inputRef.current.value)
  }

  return (
    <>
      <input type="text" name="text" id="text" ref={inputRef} />
      <br />
      <br />
      <button onClick={consoleText}>console text</button>
      <button onClick={changeTextColor}>change Text Color</button>
      <br />
      <br />
      <p style={{ color: color }}><b>always stay on 0 on the UI because useRef don't active rerenders</b></p>
      <button onClick={handleClick}>Click Me {valueRef.current}</button>
    </>
  )
}

export default App
