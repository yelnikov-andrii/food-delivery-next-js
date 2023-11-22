import { ActivationPageWrapper } from '@/components/activation/activationwrapper';
import React from 'react';
import styles from './activationToken.module.scss';

export default function Activation ({ params: {
  activationToken,
}}: {params: {activationToken: string}} ) {
  console.log(activationToken);

    return (
        <div className={styles.activation}>
          <ActivationPageWrapper 
            activationToken={activationToken}
          />
        </div>
    );
};