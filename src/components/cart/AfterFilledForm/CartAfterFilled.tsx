import React from 'react';
import styles from '../cart.module.scss';

export const CartAfterFilledForm = () => {
  return (
    <div className={styles.cart}>
      <h3 className={styles.cart__h3}>
        Дякуємо за замовлення
      </h3>
    </div>
  );
};