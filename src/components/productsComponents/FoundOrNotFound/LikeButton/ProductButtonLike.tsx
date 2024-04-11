import React from 'react';
import styles from '../product.module.scss';

export const ProductButtonLike = () => {
  function addToFavourite() {
  
  }
  return (
    <button
      className={styles.product__buttonAdd}
      onClick={(e) => {
        addToFavourite();
      }}
    >
      До обранного
    </button>
  )
}
