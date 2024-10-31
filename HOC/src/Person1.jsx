import React from 'react'
import Hoc from './Hoc'

function Person1({ counter, handleIncrease }) {
  return (
    <div style={{ display: 'flex', gap: '30px' }}>
      <h1>person1 counter: {counter}</h1>
      <button style={{ backgroundColor: 'green' }} onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Hoc(Person1)
