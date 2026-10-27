import React, { useContext } from 'react'
import { UserContext } from '../src/App'

const ChildC = () => {
    const user = useContext(UserContext);
  return (
    <div>
      Hello, {user.name}
    </div>
  )
}

export default ChildC
