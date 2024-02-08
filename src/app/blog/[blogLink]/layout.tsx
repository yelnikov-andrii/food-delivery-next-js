
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Стаття блогу',
  description: 'Generated by create next app',
}

export default function BlogItemLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className='main'>
      {children}
    </div>
  )
}
