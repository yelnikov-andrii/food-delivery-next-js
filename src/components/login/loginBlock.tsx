'use client';
import React from 'react';
import styles from './login.module.scss';
import { useLogin } from '@/app/api/services/auth/useLogin';
import { LoginEmail } from './loginEmail';
import { LoginPassword } from './loginPassword';
import { LoginUnauthorized } from './loginUnauthorized';

export const LoginBlock = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login, error, emailErrorRequest, passwordErrorRequest } = useLogin({ email, password });
  return (
    <div className={styles.login__block}>
      <form 
        className={styles.login__form} 
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
      >
        <LoginEmail 
          email={email} 
          setEmail={setEmail} 
          emailErrorRequest={emailErrorRequest}
        />
        <LoginPassword 
          password={password}
          setPassword={setPassword}
          passwordErrorRequest={passwordErrorRequest}
        />
        <div className={styles.login__buttonWrapper}>
        <button
          type="submit"
          className={styles.login__button}
        >
          Увійти
        </button>
        </div>
      </form>
      <LoginUnauthorized />
      <p className={styles.login__error}>
        {error}
      </p>
    </div>
  );
}
