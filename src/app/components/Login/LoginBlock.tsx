'use client';
import React from 'react'
import { LoginEmail } from './LoginEmail';
import { LoginPassword } from './LoginPassword';
import { LoginUnauthorized } from './LoginUnauthorized';
import { useLogin } from '@/app/API/services/auth/useLogin';
import styles from './login.module.scss';

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
