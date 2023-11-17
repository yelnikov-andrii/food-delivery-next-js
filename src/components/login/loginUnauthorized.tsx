import Link from 'next/link';
import React from 'react';
import styles from './login.module.scss';

export const LoginUnauthorized = () => {
  return (
    <div className={styles.login__unauthorized}>
      <p>
        Не зареєстровані?
      </p>
      <Link href="/registration">
        Зареєструватися
      </Link>
    </div>
  );
};

