import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const inputRef = useRef(null)
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = inputRef.current.value
    console.log('name:', name)
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type='submit'>send</button>
      </form>
    </>
  )
}

export default App
