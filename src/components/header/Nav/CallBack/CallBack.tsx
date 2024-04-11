import React from 'react';
import styles from './callback.module.scss';

interface Props {
  handleShow: () => void;
}

export const CallBack: React.FC<Props> = ({ handleShow }) => {
  return (
    <div className={styles.callback}>
      <button 
        onClick={handleShow}
        className={styles.callback__button}
      >
        Замовити дзвінок
      </button>
    </div>
  )
}
