import { useCallback, useState } from 'react'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ExpensiveCalculation from './components/ExpensiveCalculation'


function App() {
  const [count, setCount] = useState(0)
  
  // function handleClick(){
  //   setCount(prev => prev + 1)
  // }

  let handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [count])

  return (
    <div>
      <div>
        Count: {count}
      </div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>

      <br />
      <input type="text" placeholder='Type something'/>
      <div>
        {/* <ButtonComponent handleClick = {handleClick} btnName = "Click Me"/> */}
        <ExpensiveCalculation />
      </div>
    </div>
  )
}

export default App
