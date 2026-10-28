import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';
import { useState } from 'react';

function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement(){
    dispatch(decrement());
  }

  function handleReset(){
    dispatch(reset());
  }

  function handleIncrement() {
    dispatch(incrementByAmount(amount))
  }

  return (
    <div className='container'>
      <button onClick={handleIncrement}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrement}> - </button>
      <br /> <br />
      <button onClick={handleReset}>Reset</button>
      <br /> <br />
      <input type="number" value={amount} placeholder='Enter a number' onChange={(e) =>setAmount(e.target.value) }/>
      <br /> <br />
      <button onClick={handleIncrement}>Incr by Amount</button>
    </div>
  )
}

export default App
