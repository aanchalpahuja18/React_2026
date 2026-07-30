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

    const [accountType, setAccountType] = useState("student");

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
      <div className='flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button className={`${accountType === "student" ? "bg-gray-900 text-gray-100" : "bg-transparent text-gray-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("student")}>Student</button> 
        <button onClick={() => setAccountType("instructor")} className={`${accountType === "instructor" ? "bg-gray-900 text-gray-100" : "bg-transparent text-gray-200"} py-2 px-5 rounded-full transition-all duration-200`}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>

        <div className='flex gap-x-4'>
          <div>
            <label className='w-full' htmlFor="firstName"><span className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>First Name</span> <sup className='text-pink-200'>*</sup></label>
            <input required type="text" id='firstName' name='firstName' value={formData.firstName} onChange={changeHandler} placeholder='Enter first name' className='bg-gray-800 rounded-[0.5rem] w-full text-gray-300 p-[12px] mt-2 mb-4'/>
          </div>

          <div>
            <label className='w-full' htmlFor="lastName"><span className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>Last Name</span><sup className='text-pink-200'>*</sup></label>
            <input required type="text" id='lastName' name='lastName' value={formData.lastName} onChange={changeHandler} placeholder='Enter last name' className='bg-gray-800 rounded-[0.5rem] w-full text-gray-300 p-[12px] mt-2 mb-4'/>
          </div>
        </div>

        <label className='w-full' htmlFor="email"><span className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>Email Address</span><sup className='text-pink-200'>*</sup></label>
        <input required type="email" id='email' name='email' value={formData.email} onChange={changeHandler} placeholder='Enter email address' className='bg-gray-800 rounded-[0.5rem] w-full text-gray-300 p-[12px] mt-2 mb-4'/>

        <div className='flex gap-x-4'>
          <div>
            <label className='w-full' htmlFor="password"><span className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>Create Password</span> <sup className='text-pink-200'>*</sup></label>
            <div className='relative'>
              <input required type={showPassword ? "text" : "password"} id='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Enter Password' className='bg-gray-800 rounded-[0.5rem] w-full text-gray-300 p-[12px] mt-2 mb-4'/>
              <span onClick={() => setShowPassword((prevPassword) => !prevPassword)} 
                className='absolute right-4 top-[20px] cursor-pointer text-2xl text-white'>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
            </div>
          </div>
          <div>
            <label className='w-full' htmlFor="confirmPassword"><span className='text-gray-100 text-[0.875rem] mb-1 leading-[1.375rem]'>Confirm Password</span> <sup className='text-pink-200'>*</sup></label>
            <div className='relative'>
              <input required type={showConfirmPassword ? "text" : "password"} id='confirmPassword' name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} placeholder='Confirm Password' className='bg-gray-800 rounded-[0.5rem] w-full text-gray-300 p-[12px] mt-2 mb-4'/>
              <span onClick={() => setShowConfirmPassword((prevPassword) => !prevPassword)}
                className='absolute right-4 top-[20px] cursor-pointer text-2xl text-white'>{showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
            </div>
          </div>
        </div>

        <button className='bg-yellow-400 w-full rounded-[8px] font-medium text-gray-950 px-[12px] py-[8px] cursor-pointer mt-6'>Create Account</button>       
      </form>
    </div>
  )
}

export default SignupForm
