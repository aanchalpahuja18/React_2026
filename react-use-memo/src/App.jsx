import { useState, useMemo } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  function handleClick() {
    setCount(prev => prev + 1)
  }

  function expensiveTask(num) {
    console.log("Inside expensive task!")
    for(let i=0;i<100000000; i++) {}

    return num*2
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input])

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <br />

      <div>
        Count {count}
      </div>

      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a number'/>

      <br />
      <div>
        Double Value: {doubleValue}
      </div>
    </div>
  )
}

export default App
