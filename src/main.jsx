import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateTrip from './create-trip'
import { Toaster } from './components/ui/sonner'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/create-trip",
    element:<CreateTrip/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
