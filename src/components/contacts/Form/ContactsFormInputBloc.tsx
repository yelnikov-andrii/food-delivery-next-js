import React from 'react';
import styles from '../contacts.module.scss';

interface Props {
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: any) => void;
  type: string;
}

export const ContactsFormInputBlock: React.FC <Props> = ({ label, placeholder, required, value, onChange, type }) => {
  return (
    <div 
        className={styles.contactsForm__row}
      >
        <label
          className={styles.contactsForm__label}
        >
          {label}
        </label>
        <input 
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          className={styles.contactsForm__input}
          onChange={(e) => {
            onChange(e)
          }}
        />
    </div>
  )
}
