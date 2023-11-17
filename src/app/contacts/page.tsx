import React from 'react'
import styles from './page.module.scss';
import { ContactsBlock } from '../components/contacts/ContactsBlock';
import { ContactsBlockForm } from '../components/contacts/contactsBlockForm';

export default function Contacts() {
  return (
    <div className={styles.contacts}>
      <h1 className={styles.contacts__title}>
        Контакти
      </h1>
      <ContactsBlock />
      <ContactsBlockForm />
    </div>
  )
}
