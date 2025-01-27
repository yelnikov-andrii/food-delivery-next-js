import React, { Dispatch, SetStateAction } from 'react';
import styles from '../registration.module.scss';

interface Props {
  confirmPassword: string;
  passwordError: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
}

export const RegistrationConfirmPassword: React.FC <Props> = (
  {confirmPassword, passwordError, setConfirmPassword }) => {
  return (
    <div 
      className={styles.registration__row}
    >
      <label
        className={styles.registration__label}
      >
        Підтвердіть пароль
      </label>
      <input 
        type="password" 
        placeholder="Підтвердіть пароль"
        className={styles.registration__input}
        required
        value={confirmPassword}
        disabled={passwordError ? true : false}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
    </div>
  );
};

