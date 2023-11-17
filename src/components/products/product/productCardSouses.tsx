'use client';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './product.module.scss';

interface Props {
  product: any;
  selectedSouse: number;
  setSelectedSouse: Dispatch<SetStateAction<number>>;
}

export const ProductCardSouses: React.FC <Props> = ({product, selectedSouse, setSelectedSouse}) => {
  return (
    <div className={styles.product__buttonsWrapper}>
      {product.souses && (
        <div className={styles.product__buttons}>
        <button
          className={`${styles.product__button} ${selectedSouse === 0 ? styles['product__button--active'] : ''}`}
          onClick={(e) => {
            e.preventDefault();
            setSelectedSouse(0);
          }}
        >
          <strong className={styles.product__txtStrong}> 
            {product.souses[0]}
          </strong>
        </button>
        {product.souses.length === 2 && (
          <button 
          className={`${styles.product__button} ${selectedSouse === 1 ? styles['product__button--active'] : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setSelectedSouse(1);
            }}
          >
            <strong className={styles.product__txtStrong}>
              {product.souses[1]}
            </strong>
          </button>
        )}
      </div>
      )}
    </div>
  );
};

