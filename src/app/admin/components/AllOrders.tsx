'use client'
import { useAllOrders } from '@/api/services/orders/useAllOrders'
import React from 'react'
import { TableHead } from './Orders/TableHead';
import { TableBody } from './Orders/TableBody';
import styles from './Orders/orders.module.scss';

export const AllOrders = () => {
  const { ordersNormalized, ordersError, ordersLoading } = useAllOrders();

  return (
    <div>
      {ordersNormalized.length > 0 ? (
          <table className={styles.orders__table}>
            <TableHead />
            <TableBody
              orders={ordersNormalized}
            />
          </table>
        ) : (
        <div>
          Замовлень немає
        </div>
      )}
    </div>
  )
}
