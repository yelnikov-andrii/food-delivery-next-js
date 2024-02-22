import React from 'react';
import { Place } from '../../components/places/place';
import { arrPlaces } from '@/data/placesData';
import styles from './page.module.scss';

export default function Places() {
  return (
    <div className={styles.places}>
      <h1 className={styles.places__title}>
        Наші заклади
      </h1>
      <div className={styles.places__block}>
        {arrPlaces.map(place => (
          <Place 
            place={place} 
            key={place.name} 
          />
        ))}
      </div>
    </div>
  )
}
