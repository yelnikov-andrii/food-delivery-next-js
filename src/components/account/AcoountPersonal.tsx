'use client';
import { useOrders } from '@/api/services/orders/useOrders';
import React from 'react'
// import { Loading } from '../ui/loading/loading';
// import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';


export const AcoountPersonal = () => {
  const { ordersNormalized, ordersError, ordersLoading } = useOrders();
  const { auth } = useSelector((state: any) => state.auth);
  const router = useRouter();

  if (!auth) {
    router.push('/login');
  }

  return (
    <div>
      <h5 className='personalAccount__ordersTitle'>
        {ordersNormalized && ordersNormalized.length > 0 
          ? 'Ваші замовлення' : ordersLoading === true ? 'Завантаження' : 'Замовлень немає'}
      </h5>
      {/* {ordersLoading === true ? (
        <Loading />
      ) : (
        <div>
          {ordersNormalized && ordersNormalized.map((order: any) => (
            <Link href={`orders/${order.id.toString()}`} key={order.id}>
              <p>Дата замовлення: {order.createdAt.toUTCString().slice(0, -4)}</p>
            </Link>
          ))}
        </div>
      )} */}
    </div>
  )
}
