import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styles from './auth.module.scss';

interface CallBackInt {
  callbackUrl: string;
}

interface Props {
  signOut: (obj: CallBackInt) => void;
}

export const ButtonsAuthorized: React.FC<Props> = ({ signOut }) => {
  const { data: session }: any = useSession();

  return (
    <div className={styles.auth}>
      <a 
        onClick={(e) => {
          signOut({
            callbackUrl:'/'
          });
        }}
        className={styles.auth__link}
      >
        Вийти
      </a>
      <Link 
        href="/account"
        className={styles.auth__link}
      >
          Кабінет особистий
      </Link>
      {session && session.user && session?.user?.user.role === 'admin' && (
        <Link 
        href="/admin"
        className={styles.auth__link}
      >
          Адмін
      </Link>
      )}
    </div>
  )
}
