import { createContext, useContext, useState, ReactNode } from 'react'

interface GlobalContextType {
  counter: number
  color: string
  handleChangeColor: () => void
  onIncreaseCounter: () => void
  onResetCounter: () => void
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

// Custom hook to use the GlobalContext
export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider')
  }
  return context
}

// Define the type for the AppContext props
interface AppContextProps {
  children: ReactNode
}

// AppContext component
export default function AppContext({ children }: AppContextProps) {
  const [counter, setCounter] = useState<number>(0)
  const [color, setColor] = useState<string>('red')

  const onIncreaseCounter = () => {
    setCounter(counter + 1)
  }

  const onResetCounter = () => {
    setCounter(0)
  }

  const handleChangeColor = () => {
    switch (color) {
      case 'red':
        setColor('orange')
        break;
      case 'orange':
        setColor('green')
        break
      default:
        setColor('red')
        break;
    }
  }



  return (
    <GlobalContext.Provider value={{ onIncreaseCounter, onResetCounter, counter, handleChangeColor, color }}>
      {children}
    </GlobalContext.Provider>
  )
}
