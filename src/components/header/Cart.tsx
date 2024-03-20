import React from 'react';
import styles from './headernav.module.scss';
import Link from 'next/link';

interface Props {
  countOfProducts: number;
}

export const Cart: React.FC<Props> = ({ countOfProducts }) => {
  return (
    <Link
      href="/cart"
      className={styles.headerNav__link}
    >
      <div className={styles.headerNav__cart}>
        Кошик 
        {countOfProducts > 0 && 
        (
          <span className={styles['headerNav__cart--count']}>
            {countOfProducts}
          </span>
        )} 
      </div>
    </Link>
  )
}
