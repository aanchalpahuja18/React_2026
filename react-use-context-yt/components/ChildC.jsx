import React, { useContext } from 'react'
import { UserContext } from '../src/App'
import { ThemeContext } from '../src/App';

const ChildC = () => {
    const user = useContext(UserContext);
    const {theme, setTheme} = useContext(ThemeContext);

    function changeTheme() {
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
  return (
    <div>
      <p style={{color: theme === "light" ? "black": "white" }}>Hello, {user.name}</p>

      {/* Theme is: {theme} */}

      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default ChildC
