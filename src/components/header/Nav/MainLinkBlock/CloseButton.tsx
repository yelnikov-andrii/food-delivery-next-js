import React, { Dispatch, SetStateAction } from 'react';
import styles from './mainlink.module.scss';

interface Props {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const CloseButton: React.FC <Props> = ({ setMenuOpen }) => {
  return (
    <div 
      className={styles.mainlink__closeBlock}
    >
      <div 
        onClick={() => {
          setMenuOpen(false);
        }}
        className={styles.mainlink__closeButton}
      >
        <span className={styles.mainlink__closeButtonSpan}></span>
        <span className={styles.mainlink__closeButtonSpan}></span>
      </div>
    </div>
  )
}
