import React from 'react';
import styles from './form.module.scss';

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
        className={styles.form__row}
      >
        <label
          className={styles.form__label}
        >
          {label}
        </label>
        <input 
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          className={styles.form__input}
          onChange={(e) => {
            onChange(e)
          }}
        />
    </div>
  )
}
