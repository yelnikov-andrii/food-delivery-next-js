'use client';
import React from 'react';
import { RegistrationSuccess } from './RegistrationSuccess';
import { RegistrationEmail } from './RegistrationEmail';
import { RegistrationPassword } from './RegistrationPassword';
import { RegistrationConfirmPassword } from './RegistrationConfirmPassword';
import { useCheckPasswords } from '../../hooks/useCheckPasswords';
import { usePasswordHandler } from '@/app/hooks/usePasswordHandler';
import { useRegister } from '@/app/API/services/auth/useRegister';
import styles from './registration.module.scss';

export const RegistrationBlock = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [passwordIsDirty, setPasswordIsDirty] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const { passwordError, handlePassword } = usePasswordHandler(setPassword);
  const { register, emailErrorRequest, error } = useRegister(onSuccess);
  const { passwordIsValid } = useCheckPasswords(password, passwordIsDirty, passwordError, confirmPassword);

  function onSuccess() {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSuccess(true);
  }

  if (success) {
    return (
      <RegistrationSuccess />
    );
  }

  return (
    <div className={styles.registration__block}>
      <form 
        className={styles.registration__form} 
        onSubmit={(e) => {
          e.preventDefault();
          register({email, password});
        }}
      >
        <RegistrationEmail 
          email={email}
          setEmail={setEmail}
          emailErrorRequest={emailErrorRequest}
        />
        <RegistrationPassword 
          password={password}
          passwordError={passwordError}
          passwordIsDirty={passwordIsDirty}
          setPasswordIsDirty={setPasswordIsDirty}
          handlePassword={handlePassword}
        />
        <RegistrationConfirmPassword 
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          passwordError={passwordError}
        />
        <div className={styles.registration__buttonWrapper}>
        <button
          type="submit"
          disabled={!passwordIsValid}
          className={styles.registration__button}
        >
          Зареєструватися
        </button>
        </div>
      </form>
      <p className={styles.registration__error}>
        {error}
      </p>
    </div>
  );
};
