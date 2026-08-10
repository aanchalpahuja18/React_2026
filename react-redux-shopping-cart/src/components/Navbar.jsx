import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>
        <NavLink to='/'>
            <div>
                <img src='https://images.icon-icons.com/2429/PNG/512/shopify_logo_icon_147240.png' alt='logo' width={100}/>
            </div>
        </NavLink>
        <div>
            <NavLink to="/"> 
                <span>Home</span>
            </NavLink>
            <NavLink to='/cart'>
                <FaShoppingCart/>
            </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
