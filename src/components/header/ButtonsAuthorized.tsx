import React from 'react';
import styles from './headernav.module.scss';
import Link from 'next/link';

interface CallBackInt {
  callbackUrl: string;
}

interface Props {
  signOut: (obj: CallBackInt) => void;
}

export const ButtonsAuthorized: React.FC<Props> = ({ signOut }) => {
  return (
    <div className={styles.headerNav__auth}>
      <a 
        onClick={(e) => {
          signOut({
            callbackUrl:'/'
          });
        }}
        className={styles.headerNav__link}
      >
        Вийти
      </a>
      <Link 
        href="/account"
        className={styles.headerNav__link}
      >
          Кабінет особистий
      </Link>
    </div>
  )
}
