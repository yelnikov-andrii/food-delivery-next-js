'use client';
import React from 'react';
import { OrderTableHead } from './OrderTableHead';
import { OrderTableBody } from './OrderTableBody';

export const OrderTable: React.FC <any> = ({ initialProducts, products }) => {
  return (
    <table>
      <OrderTableHead />
      <OrderTableBody 
        initialProducts={initialProducts}
        products={products}
      />
    </table>
  );
};