import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cart from '../../../../../public/cart.svg';
import styles from './cart.module.scss';

interface Props {
  countOfProducts: number;
}

export const Cart: React.FC<Props> = ({ countOfProducts }) => {
  return (
    <Link
      href="/cart"
      className={styles.link}
    >
      <div className={styles.cart}>
        <Image 
          src={cart}
          alt='cart'
          width={30}
          height={30}
        />
        {countOfProducts > 0 && 
        (
          <span className={styles['cart--count']}>
            {countOfProducts}
          </span>
        )} 
      </div>
    </Link>
  )
}
