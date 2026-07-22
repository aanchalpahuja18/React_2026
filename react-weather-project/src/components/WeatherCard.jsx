import React from 'react'
import "./WeatherCard.css"

const WeatherCard = ({response}) => {
    
  return (
    <div className='card'>
      <p>{response.location.name}</p>
      <p>{response.current.condition.text}</p>
      <p>{response.current.temp_c}°C</p>
      <p>Humidity: {response.current.humidity} %</p>
      <p>Wind: {response.current.wind_kph} km/hr</p>
      <p>Feels like: {response.current.feelslike_c}°C</p>
      <img src={response.current.condition.icon} alt={response.location.name} />
    </div>

  )
}

export default WeatherCard
