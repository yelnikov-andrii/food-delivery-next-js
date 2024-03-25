import React from 'react';
import styles from '../cart.module.scss';

interface Props {
  label: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: any) => void;
  type: string;
}

export const CartFormInputBlock: React.FC <Props> = ({ label, placeholder, required, value, onChange, type }) => {
  return (
    <div 
        className={styles.cart__formRow}
      >
        <label
          className={styles.cart__formLabel}
        >
          {label}
        </label>
        <input 
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          className={styles.cart__input}
          onChange={(e) => {
            onChange(e)
          }}
        />
    </div>
  )
}
