"use client";
import { url } from '../../app/api';
import { useChangeBooleanWithTimeSpan } from '@/app/hooks/useChangeBooleanWithTimeSpan';
import { useSendData } from '@/app/hooks/useSendData';
import React from 'react'
import { MyModal } from '../../components/ui/myModal/myModal';
import styles from './modalCallback.module.scss';

export default function ModalCallback({ setShow, show }: any) {
  const handleClose = () => setShow(false);
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const { sendData } = useSendData();
  const [sent, setSent]: any = useChangeBooleanWithTimeSpan(false, false, 3000);

  function clearForm() {
    setName('');
    setNumber('');
    setSent(true);
    setTimeout(() => {
      handleClose();
    }, 3000);
  }

  return (
    <MyModal 
      active={show}
      setActive={setShow}
    >
      <div className={styles.modalCallback__title}>
          Замовити дзвінок
      </div>
      <div className={styles.modalCallback}>
        {!sent ? (
          <form 
            className={styles.modalCallback__form}
            onSubmit={(e) => {
              e.preventDefault();
              sendData({name, number}, `${url}/calls`, clearForm);
            }}
          >
            <div 
              className={styles.modalCallback__formRow}
            >
              <label
                className={styles.modalCallback__label}
              >
                Ім&apos;я
              </label>
              <input 
                type="text" 
                placeholder="Ім'я"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={styles.modalCallback__input}
              />
            </div>
            <div 
              className={styles.modalCallback__formRow}
            >
              <label
                className={styles.modalCallback__label}
              >
                Телефон
              </label>
              <input 
                type="phone"
                placeholder="Телефон"
                value={number}
                onChange={(e) => {
                  if (!isNaN(+e.target.value)) {
                    setNumber(e.target.value);
                  }
                }}
                className={styles.modalCallback__input}
              />
            </div>
            <button
              className={styles.modalCallback__button}
            >
              Відправити
            </button>
          </form>
        ): (
          <div className={styles.modalCallback__form}>
            Ми зателефонуємо вам невдовзі, мабуть
          </div>
        )}
      </div>
    </MyModal>
  );
};
