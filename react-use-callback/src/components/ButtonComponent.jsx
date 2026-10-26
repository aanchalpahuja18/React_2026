import React from 'react'

const ButtonComponent = (props) => {
    console.log("Child component got re-rendered")
  return (
    <div>
        <button onClick={props.handleClick}>{props.btnName}</button>
    </div>
  )
}

export default ButtonComponent
