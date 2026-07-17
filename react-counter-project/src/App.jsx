import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function decrementHandler(){
    if(count <= 0){
      setCount(0);
    }
    else{
      setCount(count-1);
    }
  }

  function incrementHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div className='container'>
      <div className='heading'>Increment & Decrement</div>
      <div className='buttons'>
        <button onClick={decrementHandler} className='btn'>-</button>
        <div>{count}</div>
        <button onClick={incrementHandler} className='btn'>+</button>
      </div>
      <button onClick={resetHandler} className='resetBtn'>Reset</button>
    </div>
  )
}

export default App
