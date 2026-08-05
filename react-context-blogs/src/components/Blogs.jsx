import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import { useEffect } from 'react'

const Blogs = () => {
    const {posts, loading, fetchData} = useContext(AppContext);
    console.log("Printing posts: ", posts);

    useEffect(() => {
        fetchData();
    }, [])
    
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px] justify-center items-center h-screen'>
      {loading ? <Spinner/> : (
        posts.length === 0 ? <div>No Posts found!</div> : (
            posts.map((post) => {
                return <div key={post.id}>
                    <p className='font-bold text-lg'>{post.title}</p>
                    <p className='text-sm mt-[4px]'>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
                    <p className='text-sm mt-[6px]'>Posted On <span>{post.date}</span></p>
                    <p className='text-md mt-[14px]'>{post.content}</p>
                    <div className='flex gap-x-3'>
                        {post.tags.map((tag, index) => {
                            return <span key={index} className='text-blue-600 underline text-xs font-bold mt-[5px] cursor-pointer'>#{tag}</span>
                        })}
                    </div>
                </div>
            })
        )
      )}
    </div>
  )
}

export default Blogs
