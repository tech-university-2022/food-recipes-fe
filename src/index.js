import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'

import './styles/index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App />)
