import React, {useState} from 'react'
import "./MovieCard.css"

const MovieCard = ({id, name, rating, status, handleDelete}) => {
    const [isWatching, setIsWatching] = useState(true);
    function watchHandler(){
        setIsWatching(!isWatching);
    }
  return (
    <div>
      <h3>{name}</h3>
      <h5>{rating}</h5>
      <p>Status: {isWatching ? "Watching" : "Completed"}</p>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={watchHandler}>{isWatching ? "Watching" : "Watch Again"}</button>
    </div>
  )
}

export default MovieCard
