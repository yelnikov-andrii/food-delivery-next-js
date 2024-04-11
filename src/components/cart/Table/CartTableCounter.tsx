import React from 'react';
import { useDispatch } from 'react-redux';
import styles from './table.module.scss';
import { decrement, increment, removeProduct } from '@/redux/slices/productSlice';
import { ProductAddedInt } from '@/types';

interface Props {
  product: ProductAddedInt;
}

export const CartTableCounter: React.FC <Props> = ({product}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.table__quantity}>
      <button
        className={styles.table__button}
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
        className={styles.table__button}
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