import React from 'react';

export default function ProductItemLayout({ children, params }: {children: React.ReactNode, params: {
  productId: string;
}}) {
  return (
    <div className='container'>
      {children}
    </div>
  )
}
