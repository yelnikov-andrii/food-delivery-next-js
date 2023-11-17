import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Логін',
  description: 'Generated by create next app',
}

export default function layout({ children }: {children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
