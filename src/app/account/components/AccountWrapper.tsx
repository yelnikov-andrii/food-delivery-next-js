'use client';
import React from 'react'
import { AcoountPersonal } from './PersonalAccount/AcoountPersonal';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import SessionProviderWrapper from '@/components/provider/SessionProviderWrapper';

export const AccountWrapper = () => {
  return (
    <Provider store={store}>
      <SessionProviderWrapper>
        <AcoountPersonal />
      </SessionProviderWrapper>
    </Provider>
  )
}
