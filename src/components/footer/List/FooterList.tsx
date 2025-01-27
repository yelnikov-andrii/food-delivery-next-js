import Link from 'next/link'
import React from 'react';
import styles from './list.module.scss';

export default function FooterList({ arr }: {arr: Category[]}) {
  return (
    <ul className={styles.list}>
      {arr.map((item: Category) => (
        <li 
          className={styles.list__item} 
          key={item.id}
        >
          <Link 
            href={item.link} 
            className={styles.list__link}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
