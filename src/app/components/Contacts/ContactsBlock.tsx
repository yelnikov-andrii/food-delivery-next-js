import React from 'react';
import { ContactsBlockItem } from './ContactBlockItem';
import { contactsArr } from '@/app/data/contactsData';
import styles from './contacts.module.scss';

export const ContactsBlock = () => {
  return (
    <div className={styles.contactsBlock}>
      <ContactsBlockItem contact={contactsArr[0]}/>
      <ContactsBlockItem contact={contactsArr[1]}/>
      <ContactsBlockItem contact={contactsArr[2]}/>
    </div>
  )
}
