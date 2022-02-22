/* eslint-disable no-unused-vars */
import React from 'react'
import './checkoutProduct.css'
import {useStateValue} from '../StateProvider'
function CheckoutProduct(props){
  const [{basket},dispatch] = useStateValue();
  const removeFromBasket = ()=>{
    // remove item from basket
    dispatch({
      type:'REMOVER_FROM_BASKET',
      id:props.id
    })
  }
  return (
<div className="checkoutProduct">
            <img className='checkoutProduct_image' src={props.image} alt="product"></img>
        <div className='checkoutProduct_info'>
        <p checkoutProduct_title>{props.title}</p>
        <p className="checkoutProduct_price">
            <small>$</small>
            <strong>{props.price}</strong>
        </p>
            <div className="checkoutProduct_rating">
              {Array(props.rating).fill().map((_,i)=>(
              <p>{'\u2B50'}</p>
              ))}
            </div>
           <button className="product_button" onClick={removeFromBasket}>Remove from Basket</button>
        </div>
</div>
  )
}

export default CheckoutProduct
