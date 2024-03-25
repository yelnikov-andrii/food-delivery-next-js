'use client';
import React from 'react';
import styles from '../../product.module.scss';
import { ProductInt } from '@/types';

interface Props {
  product: ProductInt;
}

export const ProductCardWeightAndCount: React.FC <Props> = ({product}) => {
  return (
    <div className={styles.product__buttonsWrapper}>
      {product.weight && (
        <div>
          <button
            // active
            className={styles.product__button}
          >
            <strong
              className={styles.product__txtStrong}
            >
              {`${product.weight} г.`}
            </strong>
            {product.count && (
              <span className={styles.product__txt}>
                {`(${product.count} шт.)`}
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

