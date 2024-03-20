import React from 'react';
import styles from './headernav.module.scss';

interface Props {
  signIn: () => void;
}

export const Login: React.FC<Props> = ({ signIn }) => {
  return (
    <a 
      onClick={() => {
        signIn()
      }}
      className={styles.headerNav__link}
    >
      Увійти
    </a>
  )
}
