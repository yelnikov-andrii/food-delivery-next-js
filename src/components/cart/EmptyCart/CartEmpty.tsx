import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './empty.module.scss';

export const CartEmpty: React.FC = () => {

  return (
    <>
      <h2 className={styles.empty__h2}>
        Ваш кошик порожній
      </h2>
      <div className={styles.empty__box}>
        <div className={styles.empty__imageWrapper}>
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
          className={styles.empty__goBack}
        >
          На головну
        </Link>
      </div>
    </>
  );
};
