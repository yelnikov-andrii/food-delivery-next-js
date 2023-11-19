import React, { Dispatch, SetStateAction } from 'react';
import styles from './login.module.scss';
import { useEmailHandler } from '@/app/hooks/useEmailHandler';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  emailErrorRequest: string;
}

export const LoginEmail: React.FC <Props> = ({ email, setEmail, emailErrorRequest }) => {
  const [emailIsDirty, setEmailIsDirty] = React.useState(false);
  const {emailError, emailHandler} = useEmailHandler(setEmail);
  return (
    <div className={styles.login__row}>
      <label className={styles.login__label}>
        Email
      </label>
      {(emailError || emailErrorRequest) && emailIsDirty && (
        <p className={styles.login__error}>
          {emailError || emailErrorRequest }
        </p>
      )}
      <input 
        type="email" 
        placeholder="Email"
        className={emailError || emailErrorRequest ? styles['login__input login__input--error'] : styles.login__input}
        required
        value={email}
        onBlur={() => {
          setEmailIsDirty(true);
        }}
        onChange={(e) => {
          emailHandler(e.target.value);
        }}
      />
    </div>
  );
};

