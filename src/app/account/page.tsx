import { AccountWrapper } from '@/components/dashboard/AccountWrapper';
import React from 'react';

export default function Account() {
  
  return (
    <div className='personalAccount'>
      <h1 className='personalAccount__title'>
        Особистий кабінет
      </h1>
      <AccountWrapper />
    </div>
  );
}

