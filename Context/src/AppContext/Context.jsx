import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const useAppContext = () => {
  return useContext(AppContext)
}

export function Context({ children }) {
  const [name, setName] = useState('amir')
  function onChangeName(name) {
    console.log('name:', name)
    setName(name)
  }
  return (
    <AppContext.Provider value={{ onChangeName, name }}>
      {children}
    </AppContext.Provider>
  )
}