import React from 'react';
import { CartBlockWrapper } from '../components/cart/cartBlockWrapper';

export default function Cart() {
  return (
    <div className='cart'>
      <h1>
        Кошик
      </h1>
    <CartBlockWrapper />
  </div>
  )
}
