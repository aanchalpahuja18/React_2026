import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

    const cartItems = useSelector((state) => state.cart);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
      setTotalAmount(cartItems.reduce((acc, curr) => (acc+curr.price), 0))
    }, [cartItems])
  return (
    <div>
      {cartItems.length > 0 ? 
      (<div>
        <div>
          {
          cartItems.map((item, index) => {
          return <CartItem key={item.id} item={item} itemIndex={index}/>
        })
        }
        </div>

        <div>
          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p><span>Total Items: {cartItems.length}</span></p>
          </div>

          <div>
            <p>Total Amount: {totalAmount}</p>
            <button>Checkout now</button>
          </div>
        </div>
      </div>
      ) : 
      (
        <div>
          <h1>Your cart is empty!</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      )
    }
    </div>
  )
}

export default Cart
