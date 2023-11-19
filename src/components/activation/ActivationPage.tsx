'use client';
import { useActivate } from '@/api/services/auth/useActivate';
import React from 'react'

export const ActivationPage = ({ activationToken }: {activationToken: string}) => {
  const {isActivated, checked, checking} = useActivate(activationToken);
  
  
  if (checking) {
    return (
      <div className='activation'>
        <h2>
          Loading...
        </h2>
      </div>
    );
  } else {
    return (
      <div className='activation'>
        {checked && isActivated ? (
          <h4>
            Акаунт успішно активований
          </h4>
        ) : (
          <h4>
            Користувач вже зареєстрований, або посилання помилкове
          </h4>
        )}
      </div>
    );
  }
};
