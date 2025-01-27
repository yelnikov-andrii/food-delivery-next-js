import React, { Dispatch, SetStateAction } from 'react';
import styles from '../product.module.scss';

interface Props {
  product: ProductInt;
  selectedSize: number;
  setSelectedSize: Dispatch<SetStateAction<number>>;
}

export const ProductSizes: React.FC <Props> = ( {product, selectedSize, setSelectedSize }) => {
  return (
    <div className={styles.product__buttons}>
      <button 
        className={`${styles.product__button} ${selectedSize === 0 ? styles['product__button--active'] : ''}`}
        onClick={(e) => {
          e.preventDefault();
          setSelectedSize(0);
        }}
      >
        <strong
          className={styles.product__txtStrong}
        >
          32 см
        </strong>
        <span 
          className={styles.product__txt}
        >
          {`(${product.sizes[0]} г.)`}
        </span>
      </button>
      <button 
        className={`${styles.product__button} ${selectedSize === 1 ? styles['product__button--active'] : ''}`}
        onClick={(e) => {
          e.preventDefault();
          setSelectedSize(1);
        }}
      >
        <strong className={styles.product__txtStrong}>
          42 см
        </strong>
        <span className={styles.product__txt}>
          {`(${product.sizes[1]} г.)`}
        </span>
      </button>
    </div>
  );
};
