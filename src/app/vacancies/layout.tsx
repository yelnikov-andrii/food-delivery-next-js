import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Вакансії',
  description: 'Generated by create next app',
}

export default function VacanciesLayout({ children }: {children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
