'use client';
import React from 'react'
import { Provider } from 'react-redux'
import { LoginBlock } from './LoginBlock'
import { store } from '@/app/redux/store'

export const LoginBlockWrapper = () => {
  return (
    <Provider store={store}> 
      <LoginBlock />
    </Provider>
  )
}
