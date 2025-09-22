import ProfilePage from './components/ProfilePage'
import React from 'react'
import { UserContext } from './components/UserContext'

const App = () => {
  const userData = { name: 'Jane Doe', email: 'Jane.doe@gmail.com' }
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  )
}

export default App
