import React from 'react';
import styles from '../headernav.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import cart from '../../../../../public/cart.svg';

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
        <Image 
          src={cart}
          alt='cart'
          width={30}
          height={30}
        />
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
