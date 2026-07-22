import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  const [input, setInput] = useState('');
  const [place, setPlace] = useState('');
  const [weatherData, setWeatherData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isDataFound, setIsDataFound] = useState(false);

  let apiUrl = 'http://api.weatherapi.com/v1/current.json?key=46b67ba5807746488f7140424262207&q=';


  function handleInputChange(e){
    setInput(e.target.value)
  }

  async function fetchWeather(){
    setIsLoading(true);
    try{
      let response = await fetch(apiUrl+place);
      let data = await response.json();
      setWeatherData(data);
      setIsDataFound(true);
    }
    catch(error){
      setIsDataFound(false);
      console.log("Error msg: " + error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    if(!place) return;
    fetchWeather();
  }, [place])

  function weatherDataHandler()
  {
    setPlace(input);
  }

  function handleSubmit(e){
    e.preventDefault();
  }

  return (
    <div className='app'>
      <div className='header'>
        <h1>Weather Dashboard</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit} className='formBox'>
          <div>
            <input type="text" id='weatherInput' onChange={handleInputChange} placeholder='Enter the place'/>
          </div>
          <div>
            <button onClick={weatherDataHandler} className='btn'>Get Weather</button>
          </div>
        </form>
      </div>
      {
        isLoading ? (<div className='loader'>Loading....</div>) : (
          isDataFound ? (<WeatherCard response={weatherData} />) : (<div>City Not Found!</div>)
        )
      }
    </div>
  )
}

export default App
