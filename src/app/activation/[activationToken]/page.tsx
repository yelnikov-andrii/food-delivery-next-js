
import React from 'react';
import styles from './activationToken.module.scss';
import { ActivationWrapper } from '@/components/activation/Activationwrapper';

export default function Activation ({ params: {
  activationToken,
}}: {params: {activationToken: string}} ) {

    return (
        <div className={styles.activation}>
          <ActivationWrapper 
            activationToken={activationToken}
          />
        </div>
    );
};