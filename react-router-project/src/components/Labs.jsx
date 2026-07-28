import React from 'react'
import { useNavigate } from 'react-router-dom'

const Labs = () => {

    const navigate = useNavigate();

    function clickHandler(){
        navigate("/support")
    }
  return (
    <div>
      This is Labs Page
      <button onClick={clickHandler}>Go to Support</button>
    </div>
  )
}

export default Labs
