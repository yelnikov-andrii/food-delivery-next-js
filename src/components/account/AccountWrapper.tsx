'use client';
import React from 'react'
import { AcoountPersonal } from './AcoountPersonal';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export const AccountWrapper = () => {
  return (
    <Provider store={store}>
      <AcoountPersonal />
    </Provider>
  )
}
