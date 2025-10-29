//Managing API calls with AXIOS
import axios from 'axios'
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY
const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `token ${GITHUB_API_KEY}`,
  },
})

//Function to fetch user data;
export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`)
    return response.data
  } catch (error) {
    console.log('Error fetching user data:', error)
    throw error
  }
}
