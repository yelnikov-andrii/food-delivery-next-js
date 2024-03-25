import React from 'react';
import styles from '../headernav.module.scss';
import Dropdown from '../../../ui/myDropdown/myDropdown';
import { phones } from '@/data/header';

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
