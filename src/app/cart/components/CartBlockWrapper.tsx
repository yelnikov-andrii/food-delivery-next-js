'use client';
import { store } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { CartBlock } from './CartBlock';

export const CartBlockWrapper = () => {
  return (
    <Provider store={store}>
      <CartBlock />
    </Provider>
  )
}