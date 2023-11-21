import Image from 'next/image'
import React from 'react';
import styles from './page.module.scss';

export default function Discounts() {
  return (
    <section className={styles.discounts}>
      <div className="container">
        <h1>
          Акції
        </h1>
        <div className={styles.discounts__block}>
          <Image 
            src="https://pizzalife.ua/assets/cache_image/files/images/279/2/Banner_birthday_1200x0_105.jpg" 
            alt=""
            className={styles.discounts__img}
            width={100}
            height={100}
            layout='responsive'
          />
        </div>
      </div>
    </section>
  )
}
