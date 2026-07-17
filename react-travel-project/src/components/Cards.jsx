import React from 'react'
import { useState } from 'react';

const Cards = ({id, img, title, price, desc, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    const info = readMore ? desc : desc.substring(0, 201)+"....";
    function readMoreHandler(){
        setReadMore(!readMore);
    }
  return (
    <div className='card'>
      <img src={img} alt={title} />
      <div className='tour-details'>
        <h4 className='tour-price'>{price}</h4>
        <h4 className='tour-name'>{title}</h4>
      </div>
      <div className='tour-desc'>
        <p>{info}</p>
        <span onClick={readMoreHandler} className='read-more'>
            {readMore ? 'Show Less' : 'Read More'}
        </span>
      </div>
      <button onClick={() => removeTour(id)}>Not interested</button>

    </div>
  )
}

export default Cards
