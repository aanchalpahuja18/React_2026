import React from 'react'
import {filteredData} from "../data"

const Filter = () => {
  return (
    <div>
      {
        filteredData.map((data) => {
            return <button key={data.id}>{data.title}</button>
        })
      }
    </div>
  )
}

export default Filter
