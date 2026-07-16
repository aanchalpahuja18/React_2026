import React from 'react'
import "./ItemDate.css"

const ItemDate = (props) => {
    const date = props.date.toLocaleString('en-US', {month: 'long'});
    const month = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();
  return (
    <div className='mfgDate'>
      <div>{date} </div>
      <div>{month}th </div>
      <div>{year}</div>
    </div>
  )
}

export default ItemDate
