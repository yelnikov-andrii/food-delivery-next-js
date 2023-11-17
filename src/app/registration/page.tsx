import React from 'react'
import styles from './page.module.scss';
import { RegistrationBlock } from '../components/registration/registrationBlock';

export default function Registration() {
  return (
    <div className={styles.registration}>
      <h1 className={styles.registration__title}>
        Реєстрація
      </h1>
      <RegistrationBlock />
    </div>
  )
}
