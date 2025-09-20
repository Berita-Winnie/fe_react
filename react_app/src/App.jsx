import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import UserProfile from './components/UserProfile'
const App = () => {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <Main />
      <UserProfile name="Winnie" Age="21" bio="She loves herself" />
      <Footer />
    </div>
  )
}

export default App
