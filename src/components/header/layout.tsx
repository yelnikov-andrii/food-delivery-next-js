import React from 'react';
import styles from './layout.module.scss';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function HeaderLayout({ children }: {children: React.ReactNode}) {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        {children}
      </div>
    </Provider>
  )
}
