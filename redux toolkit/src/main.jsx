import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import counterSlice from './features/counter.slice.js'
const myStore = configureStore({
  reducer: {
    counterSlice
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={myStore}>
    <App />
  </Provider>
)
