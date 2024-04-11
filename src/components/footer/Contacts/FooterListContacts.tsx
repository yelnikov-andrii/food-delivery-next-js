import { contacts } from '@/data/footer';
import React from 'react';
import styles from './list.module.scss';

export default function FooterListContacts() {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li 
          className={styles.list__item} 
          key={contact}
        >
          <a 
            href={contact[0] === '+' 
              ? `tel: ${contact}` 
              : contact[0] === 'p' 
                ? `mailto: ${contact}` 
                : contact} className={styles.list__link}
          >
            {contact}
          </a>
        </li>
      ))}
      <li className={styles.list__item}>
        <a 
          className={styles.list__link} 
          href="https://goo.gl/maps/WZ9wufaczsi7AFSi7" 
          target="_blank"
          rel="noreferrer"
        >
          м.Харків, вул. Героїв Харкова 298
        </a>
      </li>
      <li className={styles.list__item}>
        <a 
          className={styles.list__link} 
          href="https://goo.gl/maps/6j4hGFrotNwsfjLN6" 
          target="_blank"
          rel="noreferrer"
        >
          м.Харків, вул. Велика Кільцева 136-А
        </a>
      </li>
    </ul>
  );
}
