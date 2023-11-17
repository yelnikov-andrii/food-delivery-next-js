import React from 'react';
import styles from './cart.module.scss';
import { CartTableBody } from './cartTableBody';
import { CartTableHead } from './cartTableHead';

export const CartTable: React.FC = () => {
  return (
    <table
      className={styles.cart__table}
    >
      <CartTableHead />
      <CartTableBody />
    </table>
  );
};

