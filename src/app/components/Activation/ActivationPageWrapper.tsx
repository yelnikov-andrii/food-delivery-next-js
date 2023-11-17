'use client';
import React from 'react'
import { Provider } from 'react-redux'
import { ActivationPage } from './ActivationPage'
import { store } from '@/app/redux/store'

export const ActivationPageWrapper = ({ activationToken }: {activationToken: string}) => {
  return (
    <div>
      <Provider store={store}>
        <ActivationPage 
          activationToken={activationToken}
        />
      </Provider>
    </div>
  )
}
