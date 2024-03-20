import React from 'react';
import styles from './headernav.module.scss';

interface Props {
  handleShow: () => void;
}

export const CallBack: React.FC<Props> = ({ handleShow }) => {
  return (
    <div className={styles.headerNav__row}>
      <button 
        onClick={handleShow}
        className={styles.headerNav__button}
      >
        Замовити дзвінок
      </button>
    </div>
  )
}
