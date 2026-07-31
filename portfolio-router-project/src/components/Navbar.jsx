import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='flex py-4 w-full justify-center items-center'>
        <nav>
            <ul className='flex gap-x-10 text-2xl'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
