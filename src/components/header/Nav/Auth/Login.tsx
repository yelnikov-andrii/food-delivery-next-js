import React from 'react';
import Image from 'next/image';
import user from '../../../../../public/user.svg';
import styles from './auth.module.scss';

interface Props {
  signIn: () => void;
}

export const Login: React.FC<Props> = ({ signIn }) => {
  return (
    <a 
      onClick={() => {
        signIn()
      }}
      className={styles.auth__link}
    >
      <Image 
        src={user}
        alt='cart'
        width={30}
        height={30}
      />
    </a>
  )
}
