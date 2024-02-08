import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Реєстрація',
  description: 'Generated by create next app',
}

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='main'>
      {children}
    </div>
  )
}
