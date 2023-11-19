'use client';
import React, {Dispatch, SetStateAction} from 'react';
import { useEmailHandler } from '@/app/hooks/useEmailHandler';
import styles from './contacts.module.scss';
import { useSendData } from '@/app/hooks/useSendData';
import { url } from '@/api';

interface Props {
  setFormIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

export const ContactsForm: React.FC <Props> = ({ setFormIsSubmitted }) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [email, setEmail] = React.useState('');
  const {emailError, emailHandler} = useEmailHandler(setEmail);
  const [emailIsDirty, setEmailIsDirty] = React.useState(false);
  const { sendData } = useSendData();

  function submit() {
    setName('');
    setNumber('');
    setEmail('');
    setMessage('');
    setFormIsSubmitted(true);
  }

  return (
    <form 
      className={styles.contactsForm} 
      onSubmit={(e) => {
        e.preventDefault();
        sendData({name, number, email, message}, `${url}/feedback`, submit);
      }}
    >
      <div 
        className={styles.contactsForm__row} 
      >
        <label
          className={styles.contactsForm__label}
        >
          Ім&apos;я
        </label>
        <input 
          type="text" 
          placeholder="Ім'я"
          className={styles.contactsForm__input}
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div 
        className={styles.contactsForm__row}
      >
        <label
          className={styles.contactsForm__label}
        >
          Телефон
        </label>
        <input 
          type="text" 
          placeholder="Телефон"
          required
          value={number}
          className={styles.contactsForm__input}
          onChange={(e) => {
            if (!isNaN(+e.target.value)) {
              setNumber(e.target.value);
            }
          }}
        />
      </div>
      <div 
        className={styles.contactsForm__row}
      >
        <label
          className={styles.contactsForm__label}
        >
          Ваш Email
          {emailIsDirty && emailError && (
            <p className={styles.contactsForm__emailErrortxt}>
              {emailError}
            </p>
          )}
        </label>
        <input 
          type="email" 
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            emailHandler(e.target.value);
          }}
          onBlur={() => {
            setEmailIsDirty(true);
          }}
          className={(emailError && emailIsDirty) ? styles.contactsForm__emailErrorInput : styles.contactsForm__input}
        />
      </div>
      <div className={styles.contactsForm__row}>
        <label
          className={styles.contactsForm__label}
        >
          Повідомлення
        </label>
        <textarea
          value={message}
          rows={8}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className={styles.contactsForm__textarea}
        />
      </div>
      <button
        type="submit"
        className={styles.contactsForm__button}
      >
        Відправити
      </button>
    </form>
  );
};
