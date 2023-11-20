import classNames from 'classnames';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './login.module.scss';
import { usePasswordHandler } from '@/hooks/usePasswordHandler';

interface Props {
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  passwordErrorRequest: string;
}

export const LoginPassword: React.FC <Props> = ({ password, setPassword, passwordErrorRequest }) => {
  const [passwordIsDirty, setPasswordIsDirty] = React.useState(false);
  const { passwordError, handlePassword } = usePasswordHandler(setPassword);
  return (
    <div className={styles.login__row}>
      <label className={styles.login__label}>
        Пароль
      </label>
      {(passwordError || passwordErrorRequest) && passwordIsDirty && (
        <p className='login__error'>
          {passwordError || passwordErrorRequest}
        </p>
      )}
      <input 
        type="password" 
        placeholder="Пароль"
        className={passwordError || passwordErrorRequest ? styles['login__input login__input--error'] : styles.login__input}
        required
        value={password}
        onBlur={() => {
          setPasswordIsDirty(true);
        }}
        onChange={(e) => {
          handlePassword(e.target.value);
        }}
      />
    </div>
  );
};

