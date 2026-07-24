import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  // console.log(firstName);
  // console.log(lastName);
  
  

  // function changeFirstNameHandler(e){
  //   // console.log("Printing first name");
  //   // console.log(e.target.value);
  //   setFirstName(e.target.value)
  // }

  // function changeLastNameHandler(e){
  //   // console.log("Printing last name");
  //   // console.log(e.target.value);
  //   setLastName(e.target.value)
  // }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  })


  function changeHandler(e){
    setFormData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  console.log(formData);
  
  return (
    <div>
      <form>
        <input type="text" placeholder='First Name' onChange={changeHandler} name='firstName'/>
        <br /> <br />
        <input type="text" placeholder='Last Name' onChange={changeHandler} name='lastName'/>
        <br /> <br />
        <input type="email" placeholder='abc@gmail.com' onChange={changeHandler} name='email'/>
      </form>
    </div>
  )
}

export default App
