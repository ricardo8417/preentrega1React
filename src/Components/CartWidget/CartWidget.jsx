import React from 'react'
import cart from './assets/carrito.svg'
export const CartWidget= ({cantCart}) => {
  return (
    <div className='container-cart'>
      <img src= {cart} alt="cart-widget" />
     <p>{cantCart}</p>
          </div>
          
  )
}
