import React from 'react';
import styles from './table.module.scss';

export const CartTableHead = () => {

  return (
    <thead>
      <tr className={styles.table__headRow}>
        <th className={styles.table__headPhoto}>
          Фото
        </th>
        <th>
          Назва
        </th>
        <th className={styles.table__size}>
          Розмір
        </th>
        <th className={styles.table__souse}>
          Соус
        </th>
        <th className={styles.table__price}>
          Ціна
        </th>
        <th className={styles.table__quantity}>
          Кількість
        </th>
        <th>
          Сума
        </th>
      </tr>
    </thead>
  );
};