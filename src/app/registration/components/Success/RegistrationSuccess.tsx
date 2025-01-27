import React from 'react';
import styles from '../registration.module.scss';

export const RegistrationSuccess: React.FC = () => {

  return (
    <div>
      <p className={styles.registration__success}>
        На вашу пошту було відправлене повідомлення з активаціонним посиланням
      </p>
    </div>
  );
};

