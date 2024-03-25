import { Order } from '@/components/admin/Order/Order';
import React from 'react'

export default function page({ params }: { params: any }) {
  const { orderId } = params;

  return (
    <div>
      <Order 
        id={orderId}
      />
    </div>
  )
}
