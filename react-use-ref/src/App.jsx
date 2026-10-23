import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // let val = useRef(0);

  // let btnRef = useRef(null);

  // useEffect(() => {
  //   console.log("I am rendering again!")
  // })

  // function handleClick() {
  //   val.current += 1;
  //   console.log("Value of val: ", val);
  // }

  // function handleColorChange() {
  //   btnRef.current.style.backgroundColor = "red"
  // }

  const [time, setTime] = useState(0);
  let timerRef = useRef(null)

  function startTimer(){
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000)
  }

  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
   
  function clearTimer() {
    stopTimer();
    setTime(0);
  }

  return (

    <div>
      <h2>Stopwatch</h2>
      <h4>Time passed is: {time}</h4>
      <div>
        <button onClick={startTimer}>Start Timer</button>
      </div>
      <br /> 
      <div>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
      <br />
      <div>
        <button onClick={clearTimer}>Clear Timer</button>
      </div>
    </div>
    // <div>
    //   <div>
    //     <button onClick={handleClick} ref={btnRef}>Increment</button>
    //     <br />  <br />
    //     <button onClick={handleColorChange}>Change colour</button>
    //   </div>
    //   <br />
    //   <div>
    //     Count: {val.current}
    //   </div>
    // </div>
  )
}

export default App
