import React from 'react'
import frameImage from "../assets/frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const Template = ({title, desc1, desc2, image, formType, setIsLoggedIn}) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
            <p>{desc1}</p>
            <p>{desc2}</p>
        </div>

        {formType === "signup" ? (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        <div>
            <div></div>
            <span>OR</span>
            <div></div>
        </div>

        <button>
            Sign in with Google
        </button>
      </div>

      <div>
        <img src={frameImage} alt="Pattern"  width={558} height={504} loading='lazy' />
        <img src={image} alt="students" width={558}  height={490} loading='lazy'/>
      </div>
    </div>
  )
}

export default Template
