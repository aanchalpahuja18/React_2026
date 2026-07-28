import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Support from './components/Support'
import Labs from './components/Labs'
import MainHeader from './components/MainHeader'

function App() {



  return (
    <div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<MainHeader/>}>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='support' element={<Support/>}/>
          <Route path='labs' element={<Labs/>}/>
          <Route path='*' element={<div>404 Not Found</div>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
