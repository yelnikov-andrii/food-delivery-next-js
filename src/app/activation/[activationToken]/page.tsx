import { ActivationPageWrapper } from '@/app/components/Activation/ActivationPageWrapper';
import React from 'react';

export default function Activation ({ params: {
  activationToken,
}}: {params: {activationToken: string}} ) {
  console.log(activationToken);

    return (
        <ActivationPageWrapper 
          activationToken={activationToken}
        />
    );
};
