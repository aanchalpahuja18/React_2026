import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {useNavigate} from "react-router-dom"

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    function changeHandler(e) {
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name] : e.target.value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Passwords do not match!")
            return;
        }
        setIsLoggedIn(true)
        toast.success("Account Created");
        console.log(formData);
        navigate("/dashboard")
    }
  return (
    <div>
      <div>
        <button>Student</button> 
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        <div>
            <label htmlFor="firstName">First Name <sup>*</sup></label>
            <input required type="text" id='firstName' name='firstName' value={formData.firstName} onChange={changeHandler} placeholder='Enter first name'/>

            <label htmlFor="lastName">Last Name <sup>*</sup></label>
            <input required type="text" id='lastName' name='lastName' value={formData.lastName} onChange={changeHandler} placeholder='Enter last name'/>
        </div>
        <br />

        <label htmlFor="email">Email Address<sup>*</sup></label>
        <input required type="email" id='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter email address'/>

        <div>
            <label htmlFor="password">Create Password <sup>*</sup></label>
            <input required type={showPassword ? "text" : "password"} id='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Password'/>
            <span onClick={() => setShowPassword((prevPassword) => !prevPassword)}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>

            <label htmlFor="confirmPassword">Confirm Password <sup>*</sup></label>
            <input required type={showConfirmPassword ? "text" : "password"} id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} placeholder='Confirm Password'/>
            <span onClick={() => setShowConfirmPassword((prevPassword) => !prevPassword)}>{showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
        </div>

        <button>Create Account</button>       
      </form>
    </div>
  )
}

export default SignupForm
