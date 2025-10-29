import React, { useEffect, useState } from 'react'
import { fetchUserData } from '../services/githubservice'

const Search = () => {
  const [username, setUserName] = useState('')
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault() //stops page from refreshing..
    setError(null)
    setLoading(null)
    setUserData(null)
    try {
      const data = await fetchUserData(username)
      setUserData(data)
    } catch (error) {
      setError('Looks like we can’t find that user 😞')
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter github username"
          required
        />
        <button type="submit"> Search</button>
      </form>
      {/* Conndiional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p> {error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <h3>{userData.name || userData.login}</h3>
          <p>{userData.bio || 'No bio available'}</p>
        </div>
      )}
    </div>
  )
}

export default Search
