import React from 'react'
import  {NavLink} from "react-router-dom"

const BlogDetails = ({post}) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span className='font-bold text-lg hover:underline'>{post.title}</span>
      </NavLink> 
      <p className='text-sm mt-[4px]'>
        By 
        <span className='italic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className='underline font-bold'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm mt-[6px]'>Posted on {post.date}</p>
      <p className='text-md mt-[14px]'>{post.content}</p>
      <div>
        {
            post.tags.map((tag, index) => {
                return <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                    <span className='text-blue-600 underline text-xs font-bold mt-[5px] cursor-pointer mx-1'>{`#${tag}`}</span>
                </NavLink>
            })

        }
      </div>
    </div>
  )
}

export default BlogDetails
