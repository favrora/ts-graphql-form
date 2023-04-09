import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'
import { ApolloProvider } from '@apollo/client'
import { user } from './api/User'
import './App.scss'

const rootElement = document.getElementById('app')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(
    <ApolloProvider client={user}>
      <App />
    </ApolloProvider>
  )
}
