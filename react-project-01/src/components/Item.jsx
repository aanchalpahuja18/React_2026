import React from 'react'
import "./Item.css"
import ItemDate from './ItemDate'

const Item = (props) => {

    function clickHandler(){
        console.log("Button clicked");
        
    }
  return (
    <div className='item-container'>
      <div className="item">
        <ItemDate date={props.items[0].date}/>
        <h2>{props.items[0].name}</h2>
        <button onClick={clickHandler}>Add to Cart</button>
      </div>
      <div className="item">
        <ItemDate date={props.items[1].date}/>
        <h2>{props.items[1].name}</h2>
        <button onClick={clickHandler}>Add to Cart</button>
      </div>
      <div className="item">
        <ItemDate date={props.items[2].date}/>
        <h2>{props.items[2].name}</h2>
        <button onClick={clickHandler}>Add to Cart</button>
      </div>
      <div className="item">
        <ItemDate date={props.items[3].date}/>
        <h2>{props.items[3].name}</h2>
        <button onClick={clickHandler}>Add to Cart</button>
      </div>
    </div>
  )
}

export default Item
