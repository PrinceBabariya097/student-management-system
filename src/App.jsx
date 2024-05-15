import React from 'react'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContectUS from './pages/ContectUS'
import Teachers from './pages/Teachers'
import Gallery from './pages/GalleryPage'
import Blog from './pages/Blog'
import HeroSection from './pages/HeroSection'
import Registrstion from './pages/Registrstion'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       <Route path="/" element={<Home />} />
       <Route path="/aboutus" element={<AboutUs />} />
       <Route path="/contectus" element={<ContectUS />} />
       <Route path="/teachers" element={<Teachers />} />
       <Route path="/gallery" element={<Gallery />} />
       <Route path="/blog" element={<Blog />} />
       <Route path="/herosection" element={<HeroSection />} />
       <Route path="/registration" element={<Registrstion />} />
      </>
   )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App