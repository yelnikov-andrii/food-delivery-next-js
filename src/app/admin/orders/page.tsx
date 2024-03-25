import { useAllOrders } from '@/api/services/orders/useAllOrders'
import React from 'react';
import styles from './orders.module.scss';
import { AllOrders } from '@/components/admin/AllOrders';


export default function page() {
  return (
    <div className={styles.orders}>
      <h1>
        Замовлення
      </h1>
      <AllOrders />
    </div>
  )
}
