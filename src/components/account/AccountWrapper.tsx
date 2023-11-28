'use client';
import React from 'react'
import { AcoountPersonal } from './AcoountPersonal';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { Providers } from '../providers/Provider';

export const AccountWrapper = () => {
  return (
    <Provider store={store}>
      <Providers>
      <AcoountPersonal />
      </Providers>
    </Provider>
  )
}
