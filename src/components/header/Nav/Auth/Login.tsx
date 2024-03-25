import React from 'react';
import styles from '../headernav.module.scss';
import Image from 'next/image';
import user from '../../../../../public/user.svg'

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
      <Image 
        src={user}
        alt='cart'
        width={30}
        height={30}
      />
    </a>
  )
}
