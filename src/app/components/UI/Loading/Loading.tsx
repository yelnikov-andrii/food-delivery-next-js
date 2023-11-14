'use client';
import React from 'react';
import { Oval } from  'react-loader-spinner';
import styles from './loading.module.scss';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <h1>
        Завантаження...
      </h1>
      <Oval
        height={40}
        width={40}
        color="teal"
        wrapperStyle={{}}
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="teal"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};