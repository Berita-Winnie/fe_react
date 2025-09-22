import React from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <Main />
      <UserProfile name="Winnie" age="21" bio="She loves herself" />
      <Footer />
      <Counter />
    </div>
  )
}

export default App
