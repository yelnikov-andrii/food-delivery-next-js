import React from 'react';
import { contactsArr } from '@/data/contactsData';
import styles from './contacts.module.scss';
import { ContactsBlockItem } from './contactBlockItem';

export const ContactsBlock = () => {
  return (
    <div className={styles.contactsBlock}>
      <ContactsBlockItem contact={contactsArr[0]}/>
      <ContactsBlockItem contact={contactsArr[1]}/>
      <ContactsBlockItem contact={contactsArr[2]}/>
    </div>
  )
}
