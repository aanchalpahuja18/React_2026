import React, { useCallback, useEffect, useRef, useState } from 'react'

const ExpensiveCalculation = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState();

    const functionRef = useRef(null);


    let expensiveTask = useCallback(() => {
        console.log("Inside expensive calculation function");
        let result = 0;
        for(let i=0;i< 10; i++){
            result += i;
        }
        setCount(count+1);
        return result;
    }, [count])

    useEffect(() => {
        if(functionRef.current){
            if(functionRef.current === expensiveTask) {
                console.log("Function didn't re-rendered")
            }
            else{
                console.log("Function got re-rendered")
            }
        } else{
            functionRef.current = expensiveTask
        }
    }, [count])
  return (
    <div>
      <div>
        Count {count}
      </div>
      <br /> <br />
      <div>
        <input type="text"  placeholder='Type something' value={input} onChange={(e) => {setInput(e.target.value)}} />
      </div>
       <br /> <br />
       <div>
        Expensive calculation result: {expensiveTask()}
       </div>
    </div>
  )
}

export default ExpensiveCalculation
