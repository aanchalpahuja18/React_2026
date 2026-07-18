import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import InputForm from './components/InputForm';
import MovieCard from './components/MovieCard';
import SearchMovie from './components/SearchMovie';

function App() {
  const [addClicked, setAddClicked] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [rating, setRating] = useState(0);
  const [moviesArr, setMoviesArr] = useState([]);

  function addMovieHandler(){
      setAddClicked(true);
  }

  function handleDelete(id){
    let newMoviesArr = moviesArr.filter((movie) => movie.id !== id);
    setMoviesArr(newMoviesArr)
  }
  return (
    <div>
      <Header/>
      <p>Total Movies: {moviesArr.length}</p>
      {moviesArr.length > 0 && <SearchMovie moviesArr={moviesArr} setMoviesArr={setMoviesArr}/>}
      <button onClick={addMovieHandler}>+ Add Movie</button>
      {addClicked && <InputForm setAddClicked={setAddClicked} setMovieName= {setMovieName} setRating={setRating} movieName={movieName} setMoviesArr={setMoviesArr}
      moviesArr={moviesArr} rating={rating} />}
      {moviesArr.length == 0 && <p>No movies yet 🍿</p>}
      {moviesArr.length > 0 && 
      moviesArr.map((movie) => {
        return <MovieCard {...movie} key={movie.id} handleDelete={handleDelete}/>
      })}
    </div>
  )
}

export default App
