import React from 'react'
import {Link} from "react-router-dom"
import logo from "../assets/Logo.svg"
import { toast } from 'react-toastify'

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className='flex justify-evenly'>
      <Link to="/">
        <img src={logo} alt="Logo" width={160} height={32} loading='lazy'/>
      </Link>

      <nav>
        <ul className='flex gap-3'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
      </nav>

      <div className='flex ml-5 mr-3 gap-3'>
        {
         isLoggedIn == false && <Link to="/login">
            <button>Login</button>
        </Link>}
        {
          isLoggedIn == true && <Link to="/">
            <button onClick={() => {
                setIsLoggedIn(false)
                toast.success("Logged out successfully!")
            }}>Logout</button>
        </Link>}
        {
          isLoggedIn == false && <Link to="/signup">
            <button>Signup</button>
        </Link>}
        {
          isLoggedIn == true && <Link to="/dashboard">
            <button>Dashboard</button>
        </Link>}
      </div>
    </div>
  )
}

export default Navbar
