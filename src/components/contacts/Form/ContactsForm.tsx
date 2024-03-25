'use client';
import React, {Dispatch, SetStateAction} from 'react';
import { useEmailHandler } from '@/hooks/form/useEmailHandler';
import styles from '../contacts.module.scss';
import { useSendData } from '@/hooks/cart/useSendData';
import { url } from '@/api';
import { ContactsFormInputBlock } from './ContactsFormInputBloc';
import { ContactFormInputEmail } from './ContactFormInputEmail';

interface Props {
  setFormIsSubmitted: Dispatch<SetStateAction<boolean>>;
}

export const ContactsForm: React.FC <Props> = ({ setFormIsSubmitted }) => {
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('+380');
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

  function changeName(e: any) {
    setName(e.target.value);
  }

  function changePhone(e: any) {
    if (!isNaN(+e.target.value)) {
      if (e.target.value.length <= 13) {
        setNumber(e.target.value);
      }
    }
  }

  return (
    <form 
      className={styles.contactsForm} 
      onSubmit={(e) => {
        e.preventDefault();
        sendData({name, number, email, message}, `${url}/feedback`, submit);
      }}
    > 
      <ContactsFormInputBlock
        placeholder={`Ім'я`}
        value={name}
        onChange={changeName}
        required={true}
        label={`Ім'я`}
        type="text"
      />
      <ContactsFormInputBlock
        placeholder='Телефон'
        value={number}
        onChange={changePhone}
        required={true}
        label='Телефон'
        type='phone'
      />
      <ContactFormInputEmail 
        emailError={emailError}
        emailIsDirty={emailIsDirty}
        email={email}
        emailHandler={emailHandler}
        setEmailIsDirty={setEmailIsDirty}
      />
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
