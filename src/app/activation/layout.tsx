import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Активація акаунту',
  description: 'Сторінка для активації акаунту',
}

export default function ActivationLayout({ children }: {children: React.ReactNode }) {
  return (
    <div className='main'>
      {children}
    </div>
  )
}
