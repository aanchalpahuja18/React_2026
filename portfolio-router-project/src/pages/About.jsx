import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-10 mx-10 my-10 justify-center'>
      <span className='text-3xl text-gray-900 font-bold'>Background:</span>  
      <p className='text-xl'>I have worked a software engineer for ZS Associates for the period Jun'25 to April'26</p>

      <span className='text-3xl text-gray-900 font-bold'>Skills:</span>
      <ul className='text-xl'>
        <li>HTML, CSS</li>
        <li>JS</li>
        <li>React, React Router</li>
        <li>Tailwind CSS</li>
        <li>API Development</li>
      </ul>

      <span className='text-3xl text-gray-900 font-bold'>Journey:</span>
      <p className='text-lg'>I am a software engineer graduated in 2025! I am into Development and currently building my skills to establish an agency that provides premium apps and websites to early stage startups and clients</p>
    </div>
  )
}

export default About
