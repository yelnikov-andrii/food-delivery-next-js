import React from 'react';
import Dropdown from '../../../ui/myDropdown/myDropdown';
import { phones } from '@/data/header';
import styles from './phones.module.scss';

export const Phones = () => {
  return (
    <div className={styles.phones}>
      <Dropdown
        buttonContent='Телефони'
      >
        {phones.map((phone) => (
          <a 
            href={`tel:${phone}`} 
            key={phone}
            className={styles.phones__link}
          >
            {phone}
          </a>
          ))}
      </Dropdown>
    </div>
  )
}
