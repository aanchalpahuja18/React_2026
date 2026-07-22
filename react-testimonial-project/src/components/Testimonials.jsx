import React, { useState } from 'react'
import Card from "./Card"
import "./Testimonials.css"
import {FiChevronLeft, FiChevronRight} from "react-icons/fi"

const Testimonials = ({reviews}) => {

    const [index, setIndex] = useState(0);

    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
       if(index + 1 >= reviews.length) {
            setIndex(0);
       }
       else{
        setIndex(index + 1);
       }
       
    }

    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()*reviews.length);
        console.log(randomIndex);
        
        setIndex(randomIndex)
        
    }
  return (
    <div className='test-container'>
      <Card review={reviews[index]}/>
      <div className='btns'>
              <button className='arrow' onClick={leftShiftHandler}>
                  <FiChevronLeft className='actual'/>
              </button>
              <button  className='arrow' onClick={rightShiftHandler}>
                  <FiChevronRight className='actual'/>
              </button>
          </div>
          <div>
              <button className='surprise' onClick={surpriseHandler}>Surprise Me!</button>
        </div>
    </div>
  )
}

export default Testimonials
