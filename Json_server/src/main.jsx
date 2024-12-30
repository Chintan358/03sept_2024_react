import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css"
import App from './App.jsx'
import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/login", element: <Login></Login> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
