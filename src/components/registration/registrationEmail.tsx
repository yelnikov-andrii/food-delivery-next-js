import React, { Dispatch, SetStateAction } from 'react';
import { useEmailHandler } from '../../hooks/useEmailHandler';
import styles from './registration.module.scss';

interface Props {
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  emailErrorRequest: string;
}

export const RegistrationEmail: React.FC <Props> = ({email, setEmail, emailErrorRequest}) => {
  const [emailIsDirty, setEmailIsDirty] = React.useState(false);
  const {emailError, emailHandler } = useEmailHandler(setEmail);
  return (
    <div 
      className={styles.registration__row} 
    >
      <label
        className={styles.registration__label}
      >
        Email
      </label>
      {(emailError || emailErrorRequest) && emailIsDirty && (
        <p className={styles.registration__error}>
          {emailError || emailErrorRequest}
        </p>
      )}
      <input 
        type="email" 
        placeholder="Email"
        required
        value={email}
        className={emailError || emailErrorRequest ? styles['registration__input registration__input--error'] : styles.registration__input}
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

