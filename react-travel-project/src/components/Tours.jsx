import React from 'react'
import Cards from "./Cards"

const Tours = ({tours, removeTour}) => {

  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan with Aanchal</h2>
      </div>
      <div className='cards-container'>
        {
            tours.map((tour) => {
                return <Cards id={tour.id} img={tour.image} title={tour.name} price={tour.price} desc={tour.info}
                removeTour={removeTour}
                />
            })
        }
      </div>
    </div>
  )
}

export default Tours
