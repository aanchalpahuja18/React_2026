import React from 'react'
import "./InputForm.css"

const InputForm = ({setAddClicked, setMovieName, setRating, movieName, setMoviesArr, moviesArr, rating}) => {

    function addMovieHandler(e){
        if(movieName.trim() === ""){
            alert("Movie Name is required")
            return;
        }
        else if(rating < 0 || rating > 10){
            alert("Please input valid rating")
            return;
        }
        else{
            setAddClicked(false);
            let newMovie = {
                id: Date.now(),
                name: movieName,
                rating: rating,
                status: "Watching"
            }
            setMoviesArr([...moviesArr, newMovie]);
            setMovieName("");
            setRating(0);
        }
    }

    function nameHandler(e){
        setMovieName(e.target.value)
    }

    function ratingHandler(e){
        setRating(Number(e.target.value))
    }
  return (
    <div className='inputMovie'>
        <div className='movieInput'>
            <label htmlFor="movieName">Movie Name:</label>
            <input type="text" id='movieName' onChange={nameHandler} value={movieName}/>
        </div>
        <div className='ratingInput' >
            <label htmlFor="rating">Rating:</label>
            <input type="number" id='rating' onChange={ratingHandler} min={0} max={10} value={rating}/>
        </div>
        <div className='addButton'>
            <button onClick={addMovieHandler}>Add</button>
        </div>
    </div>
  )
}

export default InputForm
