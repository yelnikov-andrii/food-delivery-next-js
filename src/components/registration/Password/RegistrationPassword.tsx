import React, { Dispatch, SetStateAction } from 'react';
import styles from '../registration.module.scss';

interface Props {
  password: string;
  passwordError: string;
  passwordIsDirty: boolean;
  setPasswordIsDirty: Dispatch<SetStateAction<boolean>>;
  handlePassword: (str: string) => void;
}

export const RegistrationPassword: React.FC <Props> = ({
  password, passwordError, passwordIsDirty, setPasswordIsDirty, handlePassword}) => {
  return (
    <div 
      className={styles.registration__row} 
    >
      <label
        className={styles.registration__label}
      >
        Пароль
      </label>
      {passwordError && passwordIsDirty && (
        <p className={styles.registration__error}>
          {passwordError}
        </p>
      )}
      <input 
        type="password" 
        placeholder="Пароль"
        required
        value={password}
        className={passwordError && passwordIsDirty ? styles['registration__input'] + ' ' + styles['registration__input--error'] : styles.registration__input}
        onBlur={() => {
          setPasswordIsDirty(true);
        }}
        onChange={(e) => {
          handlePassword(e.target.value);
        }}
      />
    </div>
  );
};

