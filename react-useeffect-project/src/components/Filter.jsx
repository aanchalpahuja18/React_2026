import React from 'react'
import {filteredData} from "../data"
import "./Filter.css"

const Filter = () => {
  return (
    <div className='filter'>
      {
        filteredData.map((data) => {
            return <button className='filterBtn' key={data.id}>{data.title}</button>
        })
      }
    </div>
  )
}

export default Filter
