import React from 'react';
import styles from './headernav.module.scss';
import Dropdown from '../ui/myDropdown/dropdown';
import { phones } from '@/data/headerData';

export const Phones = () => {
  return (
    <div className={styles.headerNav__row}>
      <Dropdown
        buttonContent='Телефони'
      >
        {phones.map((phone) => (
            <a 
              href={`tel:${phone}`} 
              key={phone}
              className={styles.headerNav__link}
            >
              {phone}
            </a>
          ))}
      </Dropdown>
    </div>
  )
}
