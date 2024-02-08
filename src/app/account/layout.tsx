import React from 'react'

export default function AccountLayout({ children }: {children: React.ReactNode }) {
  return (
    <div className='main'>
      {children}
    </div>
  )
}
