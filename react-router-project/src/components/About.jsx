import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

    const navigate = useNavigate();

    function clickHandler()
    {
     navigate("/")   
    }

    function backHandler(){
        navigate(-1)
    }
  return (
    <div>
      This is About Page
      <button onClick={clickHandler}>Go to Home Page</button>
      <button onClick={backHandler}>Go back</button>
    </div>
  )
}

export default About
