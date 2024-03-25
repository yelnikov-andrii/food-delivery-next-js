import React from 'react';
import styles from './orders.module.scss';

export const TableHead = () => {
  return (
    <thead className={styles.orders__tableHead}>
      <tr className={styles.orders__tableHeadRow}>
        <th>
          Ім&apos;я клієнта
        </th>
        <th>
          Email
        </th>
        <th>
          Телефон
        </th>
        <th>
          Статус
        </th>
        <th>
          Відкрити замовлення
        </th>
      </tr>
    </thead>
  );
};
