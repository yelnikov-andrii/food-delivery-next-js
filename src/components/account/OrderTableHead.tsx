'use client';
import React from 'react';
import styles from './order.module.scss';

export const OrderTableHead = () => {
  return (
    <thead className={styles.order__tableHead}>
      <tr className={styles.order__tableHeadRow}>
        <th className={styles.order__photo}>
          Фото
        </th>
        <th>
          Назва
        </th>
        <th className={styles.order__size}>
          Розмір
        </th>
        <th className={styles.order__souse}>
          Соус
        </th>
        <th className={styles.order__tablePrice}>
          Ціна
        </th>
        <th className={styles.order__quantity}>
          Кількість
        </th>
        <th>
          Сума
        </th>
      </tr>
    </thead>
  );
};

