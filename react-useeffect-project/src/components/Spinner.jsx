import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='spinner'>
        <div className='custom-loader'></div>
       <p className='spinner-text'>Your data is preparing...</p>
    </div>
  )
}

export default Spinner
