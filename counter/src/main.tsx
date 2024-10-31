import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import AppContext from './AppContext.tsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AppContext>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </AppContext>
)
