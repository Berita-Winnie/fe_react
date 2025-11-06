import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams()
  const [apidata, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: '',
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGM2YzE5NTU3OGE1YWMzNDM1OWQyYjc0MmEzOGMxMiIsIm5iZiI6MTc2MjQyNTAyOC41ODUsInN1YiI6IjY5MGM3OGM0NTkxODljYzQ2NWQ3MzgzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.68ffWdu6cIWZG6YGIKXo4aI6oJtTTgkDrLft4oYXORU',
    },
  }

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0])
        }
      })
      .catch((err) => console.error(err))
  }, [id])

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      {apidata && apidata.key ? (
        <>
          {' '}
          <iframe
            width="90%"
            height="90%"
            src={`https://www.youtube.com/embed/${apidata.key}`}
            title="trailer"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="player-info">
            <p>{apidata.published_at.slice(0, 10)}</p>
            <p>{apidata.name}</p>
            <p>{apidata.type}</p>
          </div>
        </>
      ) : (
        <p>No trailer acailable!</p>
      )}
    </div>
  )
}

export default Player
