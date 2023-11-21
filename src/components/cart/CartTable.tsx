import React from 'react';
import { CartTableBody } from './CartTableBody';
import { CartTableHead } from './CartTableHead';
import styles from './cart.module.scss';

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