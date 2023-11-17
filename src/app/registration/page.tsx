import React from 'react'
import { RegistrationBlock } from '../components/Registration/RegistrationBlock';
import styles from './page.module.scss';

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
