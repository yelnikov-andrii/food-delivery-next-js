import React, { Dispatch, SetStateAction } from 'react';
import styles from '../headernav.module.scss';

interface Props {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const CloseButton: React.FC <Props> = ({ setMenuOpen }) => {
  return (
    <div 
      className={styles.headerNav__close}
    >
      <div 
        onClick={() => {
          setMenuOpen(false);
        }}
        className={styles.headerNav__closeButton}
      >
        <span className={styles.headerNav__closeButtonSpan}></span>
        <span className={styles.headerNav__closeButtonSpan}></span>
      </div>
    </div>
  )
}
