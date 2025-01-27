import { Order } from '../../components/Order/Order';
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
