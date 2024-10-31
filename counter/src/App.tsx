import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterDisplay from './CounterDisplay'
import CounterAction from './CounterAction'

function App() {
  return (
    <div className="card">
      <CounterDisplay />
      <CounterAction />
    </div>
  )
}

export default App
