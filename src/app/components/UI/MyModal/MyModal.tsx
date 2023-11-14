import React, { Dispatch, SetStateAction } from 'react';
import styles from './mymodal.module.scss';

interface  Props {
  children: React.ReactNode;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export const MyModal: React.FC <Props> = ({ children, active, setActive }) => {
  return (
    <div 
      className={active ? styles.mymodal : styles.mymodal__hidden}
      onClick={() => {
        setActive(false);
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={styles.mymodal__content}
      >
        {children}
      </div>
    </div>
  );
};