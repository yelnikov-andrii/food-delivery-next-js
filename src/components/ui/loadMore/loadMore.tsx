import React from 'react';
import styles from './loadmore.module.scss';

export const LoadMore: React.FC <any> = ({ loadmore }) => {
  return (
    <button 
      className={styles.load}
      onClick={() => {
        loadmore();
      }}
    >
      Завантажити ще
    </button>
  );
};
