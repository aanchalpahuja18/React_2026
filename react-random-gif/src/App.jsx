import { useState } from 'react'
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
    <div className='w-full h-full flex flex-col bg-blue-200 items-center pb-6'>
      <h1 className="bg-white text-4xl px-10 py-4 rounded-lg font-bold w-11/12 text-center mt-[40px] overflow-x-hidden overflow-y-hidden">RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[30px]'>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}

export default App
