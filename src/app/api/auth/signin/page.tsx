import React from 'react';
import { LoginBlockWrapper } from '@/components/login/loginBlockWrapper';
import styles from './page.module.scss';

export default function Login() {
  return (
    <div className={styles.login}>
      <h1 className={styles.login__title}>
        Увійти до особистого кабінету
      </h1>
      <LoginBlockWrapper />
    </div>
  )
}