import React from 'react';
import styles from './filled.module.scss';

export const CartAfterFilledForm = () => {
  return (
    <div className={styles.filled}>
      <h3 className={styles.filled__h3}>
        Дякуємо за замовлення
      </h3>
    </div>
  );
};