import { Order } from '@/components/account/Order'
import React from 'react'

export default function OrderPage({ params: { orderId } }: any) {

  return (
    <div>
      <h2>
        Замовлення
      </h2>
      <Order 
        orderId={orderId}
      />
    </div>
  )
}
