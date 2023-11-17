'use client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import { ActivationPage } from './activationPage';

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
