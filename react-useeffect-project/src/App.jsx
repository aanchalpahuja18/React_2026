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
  const [dataFound, setDataFound] = useState(false);

  async function fetchData() {
    setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourses(output.data);
        setDataFound(true);
        console.log(output.data);
        
      } catch (error) {
        setDataFound(false);
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
        {loading ? <Spinner/> : (
          dataFound ? <Cards courses={courses} category={category}/> : <div className='dataNotFound'>404 Data Not Found</div>
        )}
      </div>
    </div>
  )
}

export default App
