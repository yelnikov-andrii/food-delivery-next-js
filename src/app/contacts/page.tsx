import React from 'react'
import { ContactsBlock } from './components/ContactsBlock';
import { ContactsBlockForm } from './components/Form/ContactsBlockForm';
import styles from './page.module.scss';

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
