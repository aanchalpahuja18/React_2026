import React from 'react'
import "./Item.css"

const Item = (props) => {
    const itemName = props.name
  return (
    <div className='item'>
      <h1>{itemName}</h1>
    </div>
  )
}

export default Item
