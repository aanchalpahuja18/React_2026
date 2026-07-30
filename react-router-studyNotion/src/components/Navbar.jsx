import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/Logo.svg"
import { toast } from 'react-toastify'

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className='flex justify-between items-center w-11/12 max-w-290 py-4 mx-auto'>
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='text-gray-200 flex gap-x-6'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>

      <div className='flex items-center gap-x-4'>
        {
         isLoggedIn == false && <Link to="/login">
            <button className='bg-gray-800 text-gray-200 py-2 px-3 rounded-lg border border-gray-700'>Log in</button>
        </Link>}
        {
          isLoggedIn == true && <Link to="/">
            <button onClick={() => {
                setIsLoggedIn(false)
                toast.success("Logged out successfully!")
            }} className='bg-gray-800 text-gray-200 py-2 px-3 rounded-lg border border-gray-700'>Log out</button>
        </Link>}
        {
          isLoggedIn == false && <Link to="/signup">
            <button className='bg-gray-800 text-gray-200 py-2 px-3 rounded-lg border border-gray-700'>Sign up</button>
        </Link>}
        {
          isLoggedIn == true && <Link to="/dashboard">
            <button className='bg-gray-800 text-gray-200 py-2 px-3 rounded-lg border border-gray-700'>Dashboard</button>
        </Link>}
      </div>
    </div>
  )
}

export default Navbar
