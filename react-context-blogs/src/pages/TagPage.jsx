import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import Blogs from '../components/Blogs'

const TagPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div className='w-11/12 max-w-[670px] py-10 flex flex-col gap-y-7 justify-center items-center h-screen mt-[310px] mb-[210px]'>
        <div className='flex items-center gap-x-2 mt-[100px]'>
        <button onClick={() => {navigate(-1)}} className='rounded-md border-2 border-gray-200 cursor-pointer px-4 py-1'>Back</button>
        <h2 className='font-bold text-xl'>Blogs Tagged <span>#{tag}</span></h2>
        </div>
        <div className='w-11/12 max-w-[670px] py-10 flex flex-col gap-y-7 justify-center items-center h-screen mt-[150px] mb-[380px]'>
            <Blogs/>
        </div>
      </div>
      <Pagination/>
    </div>
  )
}

export default TagPage
