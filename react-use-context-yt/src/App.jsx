import React, { createContext, useState } from 'react'
import "./App.css"
import ChildA from '../components/ChildA';

//step 1: create the context
const UserContext = createContext();

//step 2: wrap the child components inside a provider

//step 3: pass the value

//step 4: consume the value

function App(){

    const [user, setUser] = useState({name: "Aanchal"});

  return (
    <div>
        <UserContext.Provider value={user}>
            <ChildA/>
        </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}