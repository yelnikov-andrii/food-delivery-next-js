import React from 'react';
import { contactsArr } from '@/data/contacts';
import styles from './contacts.module.scss';
import { ContactsBlockItem } from './BlockItem/ContactBlockItem';

export const ContactsBlock = () => {
  return (
    <div className={styles.contacts}>
      <ContactsBlockItem contact={contactsArr[0]}/>
      <ContactsBlockItem contact={contactsArr[1]}/>
      <ContactsBlockItem contact={contactsArr[2]}/>
    </div>
  )
}
