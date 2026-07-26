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
    email: "",
    message: "",
    isVisible: false,
    mode: "",
    favCar: ""
  })

  // console.log(formData);
  
  function changeHandler(e){
    // console.log(e.target);
    // console.log(typeof(e.target));
    const {name, type, value, checked} = e.target
    
    setFormData(prevState => {
      return {
        ...prevState,
        [name]: type == "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(e){
    e.preventDefault();
    console.log("Printing the form data:");
    console.log(formData);
    
  }
  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={formData.firstName} placeholder='First Name' onChange={changeHandler} name='firstName'/>
        <br /> <br />
        <input type="text" value={formData.lastName} placeholder='Last Name' onChange={changeHandler} name='lastName'/>
        <br /> <br />
        <input type="email" value={formData.email} placeholder='abc@gmail.com' onChange={changeHandler} name='email'/>
        <br /> <br />
        <textarea name="message" id="message" onChange={changeHandler} placeholder='Enter your message'
        value={formData.message}/>
        <br /> <br />
        <label htmlFor="isVisible">Am I visible?</label>
        <input type="checkbox" name="isVisible" id='isVisible' onChange={changeHandler} 
        checked={formData.isVisible}
        />
        <br /> <br />
        <fieldset>
          <legend>Mode:</legend>
          <label htmlFor="Online-Mode">Online</label>
          <input type="radio" onChange={changeHandler} name='mode' id='Online-Mode' checked={formData.mode === "Online-Mode"} value="Online-Mode"/>
          <label htmlFor="Offline-Mode">Offline</label>
          <input type="radio" onChange={changeHandler} name='mode' id='Offline-Mode' checked={formData.mode === "Offline-Mode"} value="Offline-Mode"/>
        </fieldset>
        <label htmlFor="favCar">Tell me your fav car!</label>
        <select name="favCar" id="favCar" value={formData.favCar} onChange={changeHandler}>
          <option value="bmw">BMW</option>
          <option value="mercedez">Mercedez</option>
          <option value="fortuner">Fortuner</option>
          <option value="thar">Thar</option>
          <option value="defender">Defender</option>
        </select>
        {/* <input type="submit" value="Submit" /> */}
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
