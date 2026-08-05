import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
    <Header/>
    <Blogs/>
    <Pagination/>
   </div>
  )
}

export default App
