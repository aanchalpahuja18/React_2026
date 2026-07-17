import { useState } from 'react'
import data from './data'
import './App.css'
import Tours from './components/Tours';

function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id){
        console.log("here");
        
        let newTours = tours.filter(tour => tour.id != id);
        setTours(newTours)
        console.log(newTours);
        
        console.log("reached");
        
    }

    function refreshHandler(){
      setTours(data);
    }

    if(tours.length === 0){
      return(
        <div className='refresh'>
          <h2>No Tours Left</h2>
          <button onClick={refreshHandler} className='refresh-btn'>Refresh</button>
        </div>
      )
    }

  return (
    <div className='app'>
      <Tours tours = {tours} setTours={setTours} removeTour={removeTour}/>
    </div>
  )
}

export default App
