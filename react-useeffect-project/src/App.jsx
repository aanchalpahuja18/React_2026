import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { apiUrl, filteredData } from './data'
import Spinner from './components/Spinner'
import {toast} from "react-toastify";

function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filteredData[0].title);

  async function fetchData() {
    setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourses(output.data);
        console.log(output.data);
        
      } catch (error) {
        toast.error("Something went wrong")
      }
      setLoading(false);
    }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='app'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter category={category} setCategory={setCategory}/>
      </div>
      <div className='cards-container'>
        {loading ? <Spinner/> : <Cards courses={courses} category={category}/>}
      </div>
    </div>
  )
}

export default App
