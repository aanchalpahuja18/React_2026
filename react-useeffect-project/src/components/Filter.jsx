import React from 'react'
import {filteredData} from "../data"
import "./Filter.css"

const Filter = ({category, setCategory}) => {

  function filterCategoryHandler(e){
    setCategory(e.target.innerText)
  }
  return (
    <div className='filter'>
      {
        filteredData.map((data) => {
            return <button onClick={filterCategoryHandler} className={`filterBtn ${category === data.title ? "active" : ""}`} key={data.id}
            >{data.title}</button>
        })
      }
    </div>
  )
}

export default Filter
