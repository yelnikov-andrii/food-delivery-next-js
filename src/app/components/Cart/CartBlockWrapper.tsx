'use client';
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/redux/store'
import { CartBlock } from './CartBlock';

export const CartBlockWrapper = () => {
  return (
    <Provider store={store}>
      <CartBlock />
    </Provider>
  )
}
