import React from 'react';
import { CartTableBody } from './CartTableBody';
import { CartTableHead } from './CartTableHead';
import styles from './table.module.scss';

export const CartTable: React.FC = () => {
  return (
    <table
      className={styles.table}
    >
      <CartTableHead />
      <CartTableBody />
    </table>
  );
};