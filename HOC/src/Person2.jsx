import React from 'react'
import Hoc from './Hoc'
function Person2({ counter, handleIncrease }) {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <h1>person2 Counter: {counter}</h1>
      <button style={{ backgroundColor: 'blue' }} onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Hoc(Person2)
