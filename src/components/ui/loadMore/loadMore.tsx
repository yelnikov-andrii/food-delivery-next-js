import React from 'react';
import styles from './loadmore.module.scss';

interface Props {
  loadmore: () => void;
}

export const LoadMore: React.FC <Props> = ({ loadmore }) => {
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
