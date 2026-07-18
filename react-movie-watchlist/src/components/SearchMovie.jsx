import React from 'react'
import "./SearchMovie.css"

const SearchMovie = ({moviesArr, setMoviesArr}) => {

    function handleSearchChange(e)  {
        const filteredMovies = moviesArr.filter((movie) => {
            return movie.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setMoviesArr(filteredMovies)
    }
  return (
    <div>
      <label htmlFor="search">Search Movie</label>
      <input type="text" id='search' onChange={handleSearchChange} />
    </div>
  )
}

export default SearchMovie
