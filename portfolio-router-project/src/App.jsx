import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import ProjectDetail from './components/ProjectDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-200 h-screen w-screen overflow-x-hidden'>
      <Navbar/>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element = {<About/>} />
        <Route path = '/projects' element = {<Projects/>} />
        <Route path = '/projects/:projectId' element={<ProjectDetail/>}/>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
