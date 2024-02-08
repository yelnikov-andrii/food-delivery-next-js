'use client';
import React from 'react';
import { Oval } from  'react-loader-spinner';
import styles from './loading.module.scss';

export const Loading = () => {
  return (
    <div className='main'>
      <div className={styles.loading}>
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
    </div>
  );
};