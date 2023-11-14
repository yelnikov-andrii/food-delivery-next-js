import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Супи',
  description: 'Generated by create next app',
}

export default function PizzasLayout({ children }: {children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}