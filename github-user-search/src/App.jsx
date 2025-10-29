import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Search from './components/Search'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    </div>
  )
}

export default App
