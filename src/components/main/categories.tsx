import { Category } from '@/app/types';
import Link from 'next/link';
import React from 'react';
import styles from './categories.module.scss';

export default function Categories({ arr }: {arr: Category[]}) {
  return (
    <div 
      className={styles.categories} 
    >
      <div>
        <nav className={styles.categories__nav} >
          {arr.map((item: Category) => (
            <Link 
              href={item.link}
              key={item.id}
              className={styles.categories__link} 
            >
                {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
