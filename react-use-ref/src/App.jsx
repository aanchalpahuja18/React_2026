import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);

  let val = useRef(0);

  let btnRef = useRef(null);

  useEffect(() => {
    console.log("I am rendering again!")
  })

  function handleClick() {
    val.current += 1;
    console.log("Value of val: ", val);
  }

  function handleColorChange() {
    btnRef.current.style.backgroundColor = "red"
  }

  return (
    <div>
      <div>
        <button onClick={handleClick} ref={btnRef}>Increment</button>
        <br />  <br />
        <button onClick={handleColorChange}>Change colour</button>
      </div>
      <br />
      <div>
        Count: {val.current}
      </div>
    </div>
  )
}

export default App
