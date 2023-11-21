import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Кошик',
  description: 'Generated by create next app',
}

export default function CartLayout({ children }: { children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
