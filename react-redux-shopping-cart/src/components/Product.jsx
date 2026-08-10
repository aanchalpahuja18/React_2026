import React from 'react'

const Product = ({post}) => {
  return (
    <div>
      <div>
        <p>{post.title}</p>
      </div>
      <div>
        <p>{post.description}</p>
      </div>
      <div>
        <img src={post.image} alt="product image" />
      </div>
      <div>
        <p>{post.price}</p>
      </div>
      <button>{
        true ? <span>Remove Item</span> : <span>Add to Cart</span>
        }</button>
    </div>
  )
}

export default Product
