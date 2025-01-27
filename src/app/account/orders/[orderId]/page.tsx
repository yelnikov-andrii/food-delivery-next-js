import { Order } from '../../components/Orders/Order';
import React from 'react'

export default function OrderPage({ params: { orderId } }: any) {

  return (
    <div className='main'>
      <h2>
        Замовлення
      </h2>
      <Order 
        orderId={orderId}
      />
    </div>
  )
}
