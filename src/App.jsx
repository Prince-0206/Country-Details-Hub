import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Country from './pages/Country'
import Contact from './pages/Contact'
import { CountryCard } from './Components/UI/Countrycard'
import { Applayout } from './Components/Layout/Applayout'
import Errorpage from './Components/UI/Errorpage'


const router = createBrowserRouter([
  {
  path: '/', 
  element: <Applayout />,
  errorElement: <Errorpage />,
  children: [
    {
    path: '/',
    element: <Home />
  },
  {
    path: 'about',
    element: <About />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  {
    path: 'country',
    element: <Country />
  },
  {
        path: 'country/:name',
        element: <CountryCard />
      }
   
  ]
}
])

const App = () => {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}
export default App