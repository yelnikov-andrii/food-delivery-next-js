import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './mainlink.module.scss';

interface Props {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MainLink: React.FC<Props> = ({ setMenuOpen }) => {
  return (
    <Link 
      href="/"
      className={styles.mainlink__link}
      onClick={() => {
        setMenuOpen(false);
      }}
    >
      Головна
    </Link>
  )
}
