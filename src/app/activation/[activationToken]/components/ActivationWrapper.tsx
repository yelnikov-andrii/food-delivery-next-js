'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { ActivationPage } from './ActivationPage';

export const ActivationWrapper = ({ activationToken }: {activationToken: string}) => {
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
