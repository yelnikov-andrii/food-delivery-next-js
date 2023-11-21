import { delArr } from '@/data/deliveryData';
import React from 'react';
import styles from './page.module.scss';

export default function Delivery() {
  return (
    <div className={styles.delivery}>
      <div className="container">
      <h1 className={styles.delivery__title}>
        Доставка та оплата
      </h1>
      <div className={styles.delivery__block}>
        <p className={styles.delivery__blockTitle}>
          Доставка та оплата
        </p>
        <ul className={styles.delivery__list}>
          {delArr.map(item => (
            <li className={styles.delivery__item} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}
