import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    notifiedRadio: ""
  })

  function changeHandler(e){
    const {name, value, checked, type} = e.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
      [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(e){
    e.preventDefault();
    console.log("Printing the form data");
    
    console.log(formData);
    
  }

  return (
    <div className='container'>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First name</label>
        <br />
        <input type="text" 
        onChange={changeHandler} 
        value={formData.firstName} 
        id='firstName' 
        name='firstName' 
        placeholder='Pranay'/>
        <br />
        <label htmlFor="lastName">Last name</label>
        <br />
        <input type="text" 
        onChange={changeHandler} 
        value={formData.lastName} 
        id='lastName' 
        name='lastName' 
        placeholder='Gupta'/>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input type="email" 
        onChange={changeHandler} 
        value={formData.email} 
        id='email' 
        name='email' 
        placeholder='pgupta@duck.com'/>
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select name="country" id="country" onChange={changeHandler} value={formData.country}>
          <option value="India">India</option>
          <option value="USA">United States</option>
          <option value="Canada">Canada</option>
          <option value="mexico">Mexico</option>
        </select>
        <br />
        <label htmlFor="street">Street Address</label>
        <br />
        <input type="text" 
        onChange={changeHandler} 
        value={formData.street} 
        id='street' 
        name='street' 
        placeholder='1234 Main St'/>
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input type="text" 
        onChange={changeHandler} 
        value={formData.city} 
        id='city' 
        name='city' 
        placeholder='Asanol'/>
        <br />
        <label htmlFor="state">State / Province</label>
        <br />
        <input type="text" 
        onChange={changeHandler} 
        value={formData.state} 
        id='state' 
        name='state' 
        placeholder='West Bengal'/>
        <br />
        <label htmlFor="zip">ZIP / Postal Code</label>
        <br />
        <input type="text" 
        onChange={changeHandler} 
        value={formData.zip}  
        id='zip' 
        name='zip' 
        placeholder='713301'/>
        <br />
        <p className='email-para'>By Email</p>
        <div className='checkbox'>
          <input type="checkbox" onChange={changeHandler} id='comments' name='comments'
        checked={formData.comments} value={formData.comments}
        /> 
        <label htmlFor="comments">Comments</label>
        </div>
        <p className='check-para'>Get notified when someone posts a comment on a posting.</p>

        <div className='checkbox'>
          <input type="checkbox" onChange={changeHandler} id='candidates' name='candidates'
          checked={formData.candidates}
          />
          <label htmlFor="candidates">Candidates</label>
        </div>
        <p className='check-para'>Get notified when a candidate applies for a job.</p>

        <div className="checkbox">
           <input type="checkbox" onChange={changeHandler} id='offers' name='offers'
            checked={formData.offers}
            />
            <label htmlFor="offers">Offers</label>
        </div>
        <p className='check-para'>Get notified when a candidate accepts or rejects an offer.</p>

        <p className='push'>Push Notifications</p>
        <p className='desc'>These are delivered via SMS to your mobile phone.</p>

        <div className="radio">
          <input type="radio" onChange={changeHandler} value="everything" id='everything' name='notifiedRadio'/>
          <label htmlFor="everything">Everything</label>
        </div>
        <div className="radio">
          <input type="radio" onChange={changeHandler} value="Same as email" id='email' name='notifiedRadio'/>
          <label htmlFor="email">Same as email</label>
        </div>  
        <div className="radio">
           <input type="radio" onChange={changeHandler} value="No push notifications" id='none' name='notifiedRadio'/>
           <label htmlFor="none">No push notifications</label>
        </div>
        <br />
        <button>Save</button>
      </form>
      
    </div>
  )
}

export default App
