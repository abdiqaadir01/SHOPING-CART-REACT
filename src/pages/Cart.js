import React from 'react'
import CartProduct from '../component/CartProduct'
import Payment from '../component/Payment'

function Cart() {
 
  return (
   <div className='cart-container'>
    <CartProduct/>
    <Payment/>
   </div>
  )
}

export default Cart