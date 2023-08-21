import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Router from './routes/router.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <Router />
  </AuthProvider>
)
