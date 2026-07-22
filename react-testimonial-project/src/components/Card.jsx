import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
import "./Card.css"

const Card = ({review}) => {
  return (
    <div className='card'>
      <div className='imgBox'>
        <div className="circle"></div>
        <img src={review.image} alt={review.name} className='image'/>
      </div>
      <div>
        <p className='name'>{review.name}</p>
        <p className='job'>{review.job}</p>
      </div>
    <div>
        <FaQuoteLeft className='icon'/>
    </div>
    <div className='text'>
        {review.text}
    </div>
    <div>
        <FaQuoteRight className='icon right'/>
    </div>
    </div>
  )
}

export default Card
