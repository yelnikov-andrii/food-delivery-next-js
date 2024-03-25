import React from 'react';
import styles from './admin.module.scss';
import Link from 'next/link';

export default function page() {
  return (
    <div className={styles.admin}>
      <h1>
        Адмін панель
      </h1>
      <div className={styles.admin__block}>
        <button className={styles.admin__button}>
          Створити адміна
        </button>
        <Link 
          className={styles.admin__link}
          href="/admin/orders">
          Замовлення усі
        </Link>
      </div>
    </div>
  )
}
