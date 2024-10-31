import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Context } from './AppContext/Context.jsx'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Context>
)
