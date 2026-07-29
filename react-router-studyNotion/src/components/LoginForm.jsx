import React from 'react'
import { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {Link} from "react-router-dom"
import { toast } from 'react-toastify'
import {useNavigate} from "react-router-dom"


const LoginForm = ({setIsLoggedIn}) => {
    
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function changeHandler(e){
        setFormData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged in successfully!");
        navigate("/dashboard")
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email Address <sup>*</sup></label>
        <input type="email" required id='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter email address'/>

        <label htmlFor="password">Password <sup>*</sup></label>
        <input type={showPassword ? "text" : "password"} required id='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Enter password'/>

        <span onClick={() => setShowPassword((prevPassword) => !prevPassword)}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>

        <Link to="#">
            <span>Forgot password</span>
        </Link>

        <button>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
