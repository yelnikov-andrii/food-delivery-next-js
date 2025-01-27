import Image from 'next/image';
import React from 'react';
import styles from './vacancy.module.scss';

interface Props {
  vacancy: VacancyInt;
}

export const Vacancy: React.FC <Props> = ({ vacancy }) => {
  return (
    <div 
      className={styles.vacancy}
      key={vacancy.name}
    >
      <Image 
        src={vacancy.img} 
        alt="" 
        className={styles.vacancy__img}
        layout='responsive'
        width={100}
        height={100}
      />
      <p className={styles.vacancy__name}>
        {vacancy.name}
      </p>
    </div>
  )
}
