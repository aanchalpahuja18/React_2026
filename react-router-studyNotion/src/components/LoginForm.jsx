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
        console.log("Logged in user data:");
        console.log(formData);
        
        navigate("/dashboard")
    }
  return (
    <div className='flex flex-col w-full gap-y-4 mt-6'>
      <form onSubmit={submitHandler}>
        <label className='w-full'  htmlFor="email"><span className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>Email Address</span> <sup className='text-pink-200'>*</sup></label> <br />
        <input type="email" required id='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter email address' className='bg-gray-800 rounded-[0.5rem] w-full text-gray-300 p-[12px] mt-2 mb-4'/>

        <label className='w-full' htmlFor="password"><span className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>Password</span> <sup className='text-pink-200'>*</sup></label>
        <div className='relative'>
          <input type={showPassword ? "text" : "password"} required id='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Enter password' className='bg-gray-800 rounded-[0.5rem] w-full text-gray-300 p-[12px] mt-2'/>

        <span onClick={() => setShowPassword((prevPassword) => !prevPassword)} className='absolute right-4 top-[23px] cursor-pointer text-2xl text-white'>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
        </div>

        <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot password</p>
        </Link>

        <button className='bg-yellow-400 w-full rounded-[8px] font-medium text-gray-950 px-[12px] py-[8px] cursor-pointer mt-6'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm
