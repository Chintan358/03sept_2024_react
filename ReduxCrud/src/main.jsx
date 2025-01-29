import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Display from './components/Display.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import Reg from './components/Reg.jsx'

// const router = createBrowserRouter([
//   { path: "/", element: <Provider store={store}><App></App></Provider> },
//   { path: "display", element: <Display></Display> }
// ])

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
      {
        path: "/", element: <Reg></Reg>
      },
      {
        path: "display", element: <Display></Display>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)
