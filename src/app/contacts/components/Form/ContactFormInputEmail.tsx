import React, { Dispatch, SetStateAction } from 'react';
import styles from './form.module.scss';

interface Props {
  emailError: string;
  emailIsDirty: boolean;
  email: string;
  emailHandler: (email:  string) => void;
  setEmailIsDirty: Dispatch<SetStateAction<boolean>>;
}

export const ContactFormInputEmail: React.FC <Props> = ({ emailError, emailIsDirty, email, emailHandler, setEmailIsDirty }) => {
  return (
    <div 
        className={styles.form__row}
      >
        <label
          className={styles.form__label}
        >
          Ваш Email
          {emailIsDirty && emailError && (
            <p className={styles.form__emailErrortxt}>
              {emailError}
            </p>
          )}
        </label>
        <input 
          type="email" 
          placeholder="Enter email"
          value={email}
          onChange={(e:  React.ChangeEvent<HTMLInputElement>) => {
            emailHandler(e.target.value);
          }}
          onBlur={() => {
            setEmailIsDirty(true);
          }}
          className={(emailError && emailIsDirty) ? styles.form__emailErrorInput : styles.form__input}
        />
      </div>
  )
}
