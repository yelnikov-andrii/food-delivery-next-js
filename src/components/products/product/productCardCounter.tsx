'use client';
import { useAddProduct } from '@/app/hooks/useAddProduct';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './product.module.scss';

interface Props {
  product: any;
  selectedSize: number;
  selectedSouse: number;
  showAlert: () => void;
}

export const ProductCardCounter: React.FC <Props> = ({product, selectedSize, selectedSouse, showAlert}) => {
  const [quantity, setQuantity] = React.useState(1);
  const productsInCart = useSelector((state: any) => state.product.products);
  const { add } = useAddProduct(product, selectedSize, selectedSouse, showAlert, productsInCart, quantity, true);

  return (
    <div className={styles.product__counter}>
      <button
        className={styles.product__buttonCounter}
        onClick={(e) => {
          e.preventDefault();
          if (quantity > 0) {
            setQuantity(prev => prev - 1);
          }
        }}
      >
        -
      </button>
      <input 
        className={styles.product__input}
        value={quantity}
        onChange={(e) => {
          if (isNaN(+e.target.value) || +e.target.value < 0) {
            return;
          }
          setQuantity(+e.target.value);
        }}
      />
      <button 
        className={styles.product__buttonCounter}
        onClick={(e) => {
          e.preventDefault();
          setQuantity(prev => prev + 1);
        }}
      >
        +
      </button>
      <button 
        className={styles['product__buttonCounter--toCart']}
        onClick={(e: any) => {
          e.preventDefault();
          add();
        }}
      >
        <strong>
          До кошику
        </strong>
      </button>
    </div>
  );
};

