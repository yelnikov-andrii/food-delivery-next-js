import React from 'react';
import styles from '../cart.module.scss';

export const CartTableHead = () => {

  return (
    <thead className={styles.cart__tableHead}>
      <tr className={styles.cart__tableHeadRow}>
        <th className={styles.cart__photo}>
          Фото
        </th>
        <th>
          Назва
        </th>
        <th className={styles.cart__size}>
          Розмір
        </th>
        <th className={styles.cart__souse}>
          Соус
        </th>
        <th className={styles.cart__tablePrice}>
          Ціна
        </th>
        <th className={styles.cart__quantity}>
          Кількість
        </th>
        <th>
          Сума
        </th>
      </tr>
    </thead>
  );
};