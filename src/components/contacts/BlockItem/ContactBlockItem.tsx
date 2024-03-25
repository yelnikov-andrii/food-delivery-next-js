import React from 'react';
import Image from 'next/image';
import { ContactsList } from './ContactsList';
import { Contact } from '@/types';
import styles from '../contacts.module.scss';

interface Props {
  contact: Contact;
}

export const ContactsBlockItem: React.FC <Props> = ({ contact }) => {
  return (
    <div className={styles.contactsBlockItem}>
      <Image 
        src={contact.img} 
        alt=""
        className={styles.contactsBlockItem__img}
        width={100}
        height={100}
      />
      <ContactsList data={contact.data} />
    </div>
  );
};
