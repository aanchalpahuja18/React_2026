import React from 'react'
import {useNavigate} from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate();

    function handleClick(){
        navigate("/")
    }
  return (
    <div className='flex justify-center h-screen items-center flex-col'>
      <p className='text-4xl'>404 Not Found! Please try looking for existing pages</p>
      <div>
        <button onClick={handleClick} className='mt-10 cursor-pointer bg-gray-900 text-white p-4 rounded-full'>Go to Home Page</button>
      </div>
    </div>
  )
}

export default NotFound
