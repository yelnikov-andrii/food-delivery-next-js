import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Активація акаунту',
  description: 'Generated by create next app',
}

export default function ActivationLayout({ children }: {children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  )
}
