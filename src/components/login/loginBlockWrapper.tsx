'use client';
import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { LoginBlock } from './loginBlock';

export const LoginBlockWrapper = () => {
  return (
    <Provider store={store}> 
      <LoginBlock />
    </Provider>
  )
}
