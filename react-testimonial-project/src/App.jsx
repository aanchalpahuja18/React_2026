import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import reviews from "./data"
import "./components/Testimonials"
import Testimonials from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='test-heading'>Our Testimonials</h1>
        <div className='line'></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  )
}

export default App
