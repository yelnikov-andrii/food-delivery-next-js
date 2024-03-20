
import React from 'react';
import styles from './activationToken.module.scss';
import { ActivationPageWrapper } from '@/components/activation/activationwrapper';

export default function Activation ({ params: {
  activationToken,
}}: {params: {activationToken: string}} ) {

    return (
        <div className={styles.activation}>
          <ActivationPageWrapper 
            activationToken={activationToken}
          />
        </div>
    );
};