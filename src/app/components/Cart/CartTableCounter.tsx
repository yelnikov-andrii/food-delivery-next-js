import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './cart.module.scss';
import { decrement, increment, removeProduct } from '@/app/redux/slices/productSlice';

export const CartTableCounter: React.FC <any> = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cart__quantity}>
      <button
        className={styles.cart__button}
        onClick={(e) => {
          e.preventDefault();
          if (product.quantity === 1) {
            dispatch(removeProduct(product.id));
          } else {
            dispatch(decrement(product.id));
          }
        }}
      >
        -
      </button>
      <span>
        {product.quantity}
      </span>
      <button 
        className={styles.cart__button}
        onClick={(e) => {
          e.preventDefault();
          dispatch(increment(product.id));
        }}
      >
        +
      </button>
    </div>
  );
};

