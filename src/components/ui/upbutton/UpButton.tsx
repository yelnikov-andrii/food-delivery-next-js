'use client';
import React from 'react';
import styles from './upbutton.module.scss';

export const UpButton = () => {
  function scroll() {
    window.scrollTo(0, 0);
  }
  return (
    <div className={styles.upbutton}>
      <button 
        onClick={() => {
          scroll();
        }}
        className={styles.upbutton__button}
      >
        &#11165;
      </button>
    </div>
  );
};