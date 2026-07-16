import React, { useState } from 'react'
import "./NewProduct.css"

const NewProduct = () => {

    // const [fullProductInput, setFullProductInput] = useState({
    //     title: "",
    //     date: ""
    // })

    // function titleChangeHandler(e){
    //     setFullProductInput(fullProductInput.title = e.target.value)
    //     console.log(fullProductInput.title);
        
    // }
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandler(e){
        setTitle(e.target.value)
        console.log(e.target.value);
        
    }

    function dateChangeHandler(e){
        setDate(e.target.value)
        console.log(e.target.value);
    }

    function buttonClickHandler(e){
        e.preventDefault(); 
        let newProduct = {
            newTitle: title,
            newDate: date
        }
        console.log(newProduct);
        setDate('');
        setTitle('')
        
    }
  return (
    <div className='new-product'>
      <form>
        <div className='new-product_title'>
            <label htmlFor='title'>Title: </label>
            <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className='new-product_date'>
            <label htmlFor="date">Date: </label>
            <input type="date" id='date' min={"2026-01-01"} max={'2026-12-12'} onChange={dateChangeHandler}/>
        </div>
        <div>
            <button className='new-product_btn' onClick={buttonClickHandler}>Add Product</button> 
        </div>
      </form>
    </div>
  )
}

export default NewProduct
