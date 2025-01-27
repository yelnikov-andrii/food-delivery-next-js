/* eslint-disable react/display-name */
'use client';
import { useActivate } from '@/api/services/auth/useActivate';
import React from 'react'

export const ActivationPage = React.memo(({ activationToken }: { activationToken: string }) => {
  const { isActivated, checked, checking } = useActivate(activationToken);
  
  if (checking) {
    return (
      <div className='activation'>
        <h2>
          Завантаження <span className='dots'></span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className='activation'>
        {checked === true && isActivated === true && (
          <h4>
            Акаунт успішно активований
          </h4>
        )}
        {checked === true && isActivated === false && (
            <h4>
              Користувач вже зареєстрований, або посилання помилкове
            </h4>
        )}
      </div>
    );
  }
});

