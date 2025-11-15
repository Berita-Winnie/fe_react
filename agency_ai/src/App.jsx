import React, { useState } from 'react'
import NavBar from './components/NavBar'

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  return (
    <div>
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
