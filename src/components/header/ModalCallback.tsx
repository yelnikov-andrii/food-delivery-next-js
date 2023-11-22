"use client";
import { url } from '../../api';
import { useChangeBooleanWithTimeSpan } from '@/hooks/useChangeBooleanWithTimeSpan';
import { useSendData } from '@/hooks/useSendData';
import React, { Dispatch, SetStateAction } from 'react'
import { MyModal } from '../../components/ui/myModal/myModal';
import styles from './modalCallback.module.scss';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  show: boolean;
}

export default function ModalCallback({ setShow, show }: Props) {
  const handleClose = () => setShow(false);
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('+380');
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
                    if (e.target.value.length <= 13) {
                      setNumber(e.target.value);
                    }
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
