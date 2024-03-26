import { PlaceInterface } from '@/types';
import Image from 'next/image';
import React from 'react';
import styles from './place.module.scss';

interface Props {
  place: PlaceInterface
}

export const Place: React.FC <Props> = ({ place }) => {
  return (
    <div 
      className={styles.place} 
      key={place.name}
    >
      <Image 
        src={place.img} 
        alt="place" 
        className={styles.place__img}
        layout="responsive"
        width={100}
        height={100}
      />
      <p className={styles.place__name}>
        {place.name}
      </p>
    </div>
  )
}
