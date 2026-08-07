import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../../baseUrl';
import { useEffect } from 'react';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {loading, setLoading} = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog/?blogId=${blogId}`;
        try {
            const result = await fetch(url);
            const data = await result.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlog)
        } catch (error) {
            console.log("Error in fetching the blog", error);
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname])
  return (
    <div>
      <Header/>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        {
            loading ? <div><p>Loading.....</p></div> : (blog ? (<div>
                <BlogDetails post = {blog}/>
                <h2>Related Blogs</h2>
                {
                    relatedBlogs.map((post) => {
                        return <div key={post.id}><BlogDetails post = {relatedBlogs}/></div>
                    })
                }
                </div>) : (<div><p>No Blogs Found!</p></div>))
        }
      </div>
    </div>
  )
}

export default BlogPage
