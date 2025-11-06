import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()
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
      `https://api.themoviedb.org/3/movie/${
        category ? category : 'now_playing'
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err))

    const handleWheel = (e) => {
      e.preventDefault()
      cardsRef.current.scrollLeft += e.deltaY
    }
    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  return (
    <div className="title-cards">
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <div key={index} className="card ">
            <img
              src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
              alt=""
            />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
