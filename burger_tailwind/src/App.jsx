import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
