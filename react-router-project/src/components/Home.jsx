import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Outlet/>
      This is Home Page
    </div>
  )
}

export default Home
