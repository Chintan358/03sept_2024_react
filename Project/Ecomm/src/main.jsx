import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/style.min.css'
import 'font-awesome/css/font-awesome.min.css';
import {RouterProvider,createBrowserRouter } from 'react-router-dom'
import Products from './components/Products.jsx'
import Shop from './components/Shop.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import ShopDetail from './components/ShopDetail.jsx'

const router =   createBrowserRouter([
    {path:"/", element:<App/>,
       children:[{path:'/', element:<Products/>},
        {path:'/shop', element:<Shop/>},
        {path:'/contact', element:<Contact/>},
        {path:'/cart',element:<Cart/>},
        {path:'/details', element:<ShopDetail/>}
       ]},
   
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
