import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path:"/",
  index:true,
  element:<App/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
