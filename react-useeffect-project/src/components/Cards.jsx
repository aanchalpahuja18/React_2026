import React, { useState } from 'react'
import Card from './Card';
import "./Cards.css"

const Cards = ({courses, category}) => {

  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if(category == "All"){
      let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);

      })
    })
    return allCourses;
    }
    else{
      return courses[category];
    }
  }
  return (
    <div className='cards-box'>
      {
        getCourses().map((course, index) => {
          return <Card key={index} course = {course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
      }
    </div>
  )
}

export default Cards
