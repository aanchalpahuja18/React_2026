import React, {useState} from 'react'
import "./MovieCard.css"

const MovieCard = ({id, name, rating, status, handleDelete}) => {
    const [isWatching, setIsWatching] = useState(true);
    function watchHandler(){
        setIsWatching(!isWatching);
    }
  return (
    <div className='card'>
      <h3 className='title'>{name}</h3>
      <h5 className='rating'>{rating}⭐</h5>
      <p className='status'>Status: {isWatching ? "Watching" : "Completed"}</p>
      <div className='buttons'>
        <button onClick={() => handleDelete(id)} className='delete'>Delete</button>
        <button onClick={watchHandler} className='watch'>{isWatching ? "Watching" : "Watch Again"}</button>
      </div>
    </div>
  )
}

export default MovieCard
