import React from 'react'
import {RiDeleteBin6Fill} from "react-icons/ri"
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {

    const dispatch = useDispatch();

    function removeFromCart(){
        dispatch(remove(item.id));
        toast.error("Item Removed!");
    }
  return (
    <div>
      <div>
        <div>
            <img src={item.image} alt="" />
        </div>
        <div>
            <h1>{item.title}</h1>
            <h1>{item.description}</h1>
            <div>
                <p>{item.price}</p>
                <div onClick={removeFromCart}>
                    <RiDeleteBin6Fill/>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default CartItem
