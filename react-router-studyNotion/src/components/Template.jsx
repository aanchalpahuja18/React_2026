import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {FcGoogle} from "react-icons/fc"

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div className='flex w-11/12 max-w-290 px-2 py-10 mx-auto justify-between gap-x-12 gap-y-0 h-screen overflow-hidden'>
      <div className='w-11/12 max-w-[450px]'>
        <h1 className='text-gray-100 text-[1.875rem] font-semibold leading-[2.375rem]'>{title}</h1>
        <div className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <p className=' text-gray-300'>{desc1}</p>
            <p className='text-blue-100 italic'>{desc2}</p>
        </div>

        {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div className='flex items-center w-full my-4 gap-x-2'>
            <div className='w-full h-px bg-gray-700'></div>
            <span className='text-gray-500 font-medium leading-[1.375rem]'>OR</span>
            <div className='w-full h-px bg-gray-700'></div>
        </div>

        <button className='w-full flex justify-center items-center font-medium text-gray-400 mt-6 gap-x-2 py-2 px-4 border border-gray-700 rounded-lg'>
            <FcGoogle/>
            Sign in with Google
        </button>
      </div>

      <div className='w-11/12 max-w-[450px] relative'>
        <img src={frameImage} alt="Pattern"  width={558} height={504} loading='lazy' />
        <img src={image} alt="students" width={558}  height={490} loading='lazy' className='absolute -top-4 right-4'/>
      </div>
    </div>
  )
}

export default Template
