import React from 'react';
import styles from '../headernav.module.scss';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface CallBackInt {
  callbackUrl: string;
}

interface Props {
  signOut: (obj: CallBackInt) => void;
}

export const ButtonsAuthorized: React.FC<Props> = ({ signOut }) => {
  const { data: session }: any = useSession();

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
      {session && session.user && session?.user?.user.role === 'admin' && (
        <Link 
        href="/admin"
        className={styles.headerNav__link}
      >
          Адмін
      </Link>
      )}
    </div>
  )
}
