'use client';
import React from 'react'
import { CartBlock } from './CartBlock'
import { Provider } from 'react-redux'
import { store } from '@/app/redux/store'

export const CartBlockWrapper = () => {
  return (
    <Provider store={store}>
      <CartBlock />
    </Provider>
  )
}
