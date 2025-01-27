'use client';
import React from 'react';
import styles from '../../product.module.scss';

interface Props {
  product: ProductInt;
  selectedSize: number;
}

export const ProductPrices: React.FC <Props> = ({ product, selectedSize }) => {
  return (
    <div>
      {product.prices && (
        <strong className={styles.product__price}>
        {`${product.prices[selectedSize]} грн.`}
      </strong>
      )}
    </div>
  )
}
