'use client';
import React from 'react';
import { OrderTableHead } from './OrderTableHead';
import { OrderTableBody } from './OrderTableBody';
import styles from './order.module.scss';

export const OrderTable: React.FC <any> = ({ initialProducts, products }) => {
  return (
    <table className={styles.order__table}>
      <OrderTableHead />
      <OrderTableBody 
        initialProducts={initialProducts}
        products={products}
      />
    </table>
  );
};