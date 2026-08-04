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
    <div>
      {loading ? <Spinner/> : (
        posts.length === 0 ? <div>No Posts found!</div> : (
            posts.map((post) => {
                return <div key={post.id}>
                    <p>{post.title}</p>
                    <p>By <span>{post.author}</span> on <span>{post.category}</span></p>
                    <p>Posted on <span>{post.date}</span></p>
                    <p>{post.content}</p>
                    <div>
                        {post.tags.map((tag, index) => {
                            return <span key={index}>#{tag}</span>
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
