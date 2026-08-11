import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const Product = ({post}) => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // const isAdded = cart.find((el) => el.id === post.id);
    // console.log(isAdded);

    function removeFromCart(){
        dispatch(remove(post.id));
        toast.error("Item removed from the cart")
    }

    function addToCart(){
        dispatch(add(post));
        toast.success("Item added to the cart")
    }
    
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
        {
            cart.find((el) => el.id === post.id) ? <button onClick={removeFromCart}>Remove Item</button> : 
            <button onClick={addToCart}>Add to Cart</button>
        }
    </div>
  )
}

export default Product
