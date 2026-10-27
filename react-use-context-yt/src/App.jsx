import React, { createContext, useState } from 'react'
import "./App.css"
import ChildA from '../components/ChildA';

//step 1: create the context
const UserContext = createContext();

//step 2: wrap the child components inside a provider

//step 3: pass the value

//step 4: consume the value


//Project 2:

const ThemeContext = createContext();

function App(){

    const [user, setUser] = useState({name: "Aanchal"});

    const [theme, setTheme] = useState("light");

  return (
    // <div>
    //     <UserContext.Provider value={user}>
    //         <ChildA/>
    //     </UserContext.Provider>
    // </div>
    

    //Project 2:
    <div>
        <UserContext.Provider value={user}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <div id='container' style={{backgroundColor: theme === "light" ? "beige" : "black"}}>
                    <ChildA />
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}