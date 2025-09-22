import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.Jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Route for home page */}
        <Route path="/" element={<Home />} />
        {/* Route for aboute page */}
        <Route path="/about" element={<About />} />
        {/* Route for contact page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
