import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './cart.module.scss';

export const CartEmpty: React.FC = () => {

  return (
    <div className={styles.cart}>
      <h2 className={styles.cart__h2}>
        Ваш кошик порожній
      </h2>
      <div className={styles.cart__emptyBox}>
        <div className={styles.cart__imageWrapper}>
        <Image 
          src="https://pizzalife.ua/templates/main/wp-content/uploads/2019/04/demo1-0939697612-1.jpg"
          alt=""
          layout='responsive'
          width={100}
          height={100}
        />
        </div>
        <Link 
          href="/"
          className={styles.cart__goBack}
        >
          На головну
        </Link>
      </div>
    </div>
  );
};

