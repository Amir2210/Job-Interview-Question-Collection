import React, { useState } from 'react'

function Hoc(OriginalComponent) {
  function NewComponent() {
    const [counter, setCounter] = useState(0)
    const handleIncrease = () => {
      setCounter(counter + 1)
    }
    return <OriginalComponent counter={counter} handleIncrease={handleIncrease} />
  }
  return NewComponent
}

export default Hoc
