import React from 'react';
import styles from './product.module.scss';
import { ProductInt } from '@/types';

interface Props {
  product: ProductInt;
}

export const ProductWeightOrCount: React.FC <Props> = ({ product }) => {
  return (
    <div>
      <button
        className={styles.product__button}
      >
        {product.weight > 0 && (
          <strong
            className={styles.product__txtStrong}
          >
            {`${product.weight} г.`}
          </strong>
        )}
        {product.count > 0 && (
          <span 
            className={styles.product__txt}
          >
            {`(${product.count} шт.)`}
          </span>
        )}
      </button>
    </div>
  );
};

