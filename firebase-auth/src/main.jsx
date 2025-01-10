import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login.jsx'
import Reg from './components/Reg.jsx'
import Profile from './components/Profile.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "reg", element: <Reg></Reg> },
  { path: "profile", element: <Profile></Profile> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
