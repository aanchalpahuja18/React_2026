import React, { useState } from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import "./Card.css"
import { toast } from 'react-toastify';

const Card = ({course, likedCourses, setLikedCourses}) => {

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //pehle se course is liked
      setLikedCourses((prev) => prev.filter((id) => (id !== course.id)) );
      toast.warning("Like Removed!")
    }
    else{
      //if pehle se course is not liked
      //then we have to insert this course into the likedCourses array
      if(likedCourses.length == 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev) => [...prev, course.id])
      }
      toast.success("Liked successfully!")
    }
  }
  return (
    <div className='card'>
      <div className='imgBox'>
        <img src={course.image.url} alt={course.image.alt} className='image'/>
        <div className='likeBtn'>
            <button className='btn' onClick={clickHandler}>
                {
                  likedCourses.includes(course.id) ? <FcLike className='icon' /> : <FcLikePlaceholder className='icon'/>
                }
            </button>
        </div>
      </div>
       <div className='text'>
            <p className='title'>{course.title}</p>
            <p className='desc'>
              {
                course.description.length > 100 ?
                course.description.substring(0,100) + "..." :
                course.description
              }
            </p>
       </div>
    </div>
  )
}

export default Card
