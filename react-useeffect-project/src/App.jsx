import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import { apiUrl, filteredData } from './data'

function App() {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourses(output.data);
        console.log(output);
        
      } catch (error) {
        toast.error("Something went wrong")
      }
    }

    fetchData();
  }, [])

  return (
    <div>
      <Navbar/>
      <Filter/>
      <Cards courses={courses}/>
    </div>
  )
}

export default App
