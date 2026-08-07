import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import {Routes, Route} from "react-router-dom"
import { useContext, useEffect } from 'react'
import { AppContext } from './context/AppContext'
import {useSearchParams, useLocation} from "react-router-dom"
import Home from './pages/Home'
import TagPage from './pages/TagPage'
import CategoryPage from './pages/CategoryPage'
import BlogPage from './pages/BlogPage'

function App() {
  const {fetchData} = useContext(AppContext)
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

   useEffect(() => {
        const page = searchParams.get("page") ?? 1;
        if(location.pathname.includes("tag")){
          const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
          fetchData(Number(page), tag)
        }
        else if(location.pathname.includes("categories")){
          const category = location.pathname.split("/").at(-1).replaceAll("-", " ")
          fetchData(Number(page), null, category)
        }
        else{
          fetchData(Number(page));
        }
      }, [location.pathname, location.search])

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogId' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/categories/:category' element={<CategoryPage/>}/>
    </Routes>
  )
}

export default App
