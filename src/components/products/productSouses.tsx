import React, { Dispatch, SetStateAction } from 'react';
import styles from './product.module.scss';
import { ProductInt } from '@/types';

interface Props {
  product: ProductInt;
  selectedSouse: number;
  setSelectedSouse: Dispatch<SetStateAction<number>>;
}

export const ProductSouses: React.FC <Props> = ({product, selectedSouse, setSelectedSouse}) => {
  return (
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
  );
};

