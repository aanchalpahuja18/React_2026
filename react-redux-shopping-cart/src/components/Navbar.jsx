import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart);
  return (
    <div>
      <nav className='flex items-center justify-between h-20 max-w-6xl mx-auto'>
        <NavLink to='/'>
            <div className='ml-5'>
                <img src='https://images.icon-icons.com/2429/PNG/512/shopify_logo_icon_147240.png' alt='logo' className='ml-5 w-[100px]'/>
            </div>
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 mr-5 gap-x-6'>
            <NavLink to="/"> 
                <span>Home</span>
            </NavLink>
            <NavLink to='/cart'>
                <div className='relative'>
                    <div className='text-2xl'>
                        <FaShoppingCart/>
                    </div>
                    {cartItems.length > 0 && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center animate-bounce rounded-full text-white'>{cartItems.length}</span>}
                </div>
            </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
