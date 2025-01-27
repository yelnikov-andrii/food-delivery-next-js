import React from 'react';
import Image from 'next/image';
import { ContactsList } from './ContactsList';
import styles from './block.module.scss';

interface Props {
  contact: Contact;
}

export const ContactsBlockItem: React.FC <Props> = ({ contact }) => {
  return (
    <div className={styles.block}>
      <Image 
        src={contact.img} 
        alt=""
        className={styles.block__img}
        width={100}
        height={100}
      />
      <ContactsList data={contact.data} />
    </div>
  );
};
