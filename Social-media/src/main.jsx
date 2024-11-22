import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import {RouterProvider,  createBrowserRouter } from "react-router-dom"
import CreatePost from './components/CreatePost.jsx'
import ListPost from './components/ListPost.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'


const router =  createBrowserRouter([
  {path:"/", element:<App/> , children:[
    {path:"/", element:<ListPost/>},
    {path:"/create-post", element:<CreatePost/>},{
      path: "/about",
      element: <About/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }
  ]},
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
