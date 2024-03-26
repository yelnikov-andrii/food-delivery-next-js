'use client';
import React from 'react';
import styles from './login.module.scss';
import { LoginEmail } from './Email/LoginEmail';
import { LoginPassword } from './Password/LoginPassword';
import { LoginUnauthorized } from './UnAuthorized/LoginUnauthorized';
import { signIn } from 'next-auth/react';

export const LoginBlock = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const { login, error, emailErrorRequest, passwordErrorRequest } = useLogin({ email, password });
  async function login() {
    const res = await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/account'
    });
  }

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
          // emailErrorRequest={emailErrorRequest}
          emailErrorRequest=""
        />
        <LoginPassword 
          password={password}
          setPassword={setPassword}
          // passwordErrorRequest={passwordErrorRequest}
          passwordErrorRequest=""
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
        
      </p>
    </div>
  );
}
