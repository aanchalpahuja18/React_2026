import React from 'react'
import "./ItemDate.css"

const ItemDate = (props) => {
    const date = props.date;
    const month = props.month;
    const year = props.year;
  return (
    <div className='mfgDate'>
      <span>{date}th </span>
      <span>{month} </span>
      <span>{year}</span>
    </div>
  )
}

export default ItemDate
