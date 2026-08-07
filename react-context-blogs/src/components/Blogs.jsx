import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blogs = () => {
    const {posts, loading} = useContext(AppContext);
    console.log("Printing posts: ", posts);
    
  return (
    <div className='w-11/12 max-w-[670px] py-10 flex flex-col gap-y-7 justify-center items-center h-screen'>
      {loading ? <Spinner/> : (
        posts.length === 0 ? <div>No Posts found!</div> : (
            posts.map((post) => {
                return <BlogDetails key={post.id} post ={post}/>
            })
        )
      )}
    </div>
  )
}

export default Blogs
