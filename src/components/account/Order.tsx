'use client';
import { useGetOrdersProducts } from '@/api/services/orders/useGetOrdersProducts';
import { useOrder } from '@/api/services/orders/useOrder';
import { useGetSum } from '@/hooks/useGetSum';
import React from 'react';
import { OrderTable } from './OrderTable';

export const Order: React.FC <any> = ({ orderId }) => {
  const {order, orderLoading, orderError} = useOrder(orderId);
  const { initialProducts, products } = useGetOrdersProducts(order);
  const {sum} = useGetSum(products, initialProducts);

  if (orderError) {
    return (
      <p>
        Error {orderError}
      </p>
    );
  }

  return (
    <div className='order'>
      {orderLoading === true ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
          {order && (
            <>
              <h1>{new Date(order.createdAt).toUTCString().slice(0, -4)}</h1>
              <p>
                Адреса: {order.address}
              </p>
              Продукти:
              <OrderTable 
                initialProducts={initialProducts}
                products={products}
              />
              <p className='cart__sum'>
                Сума замовлення: {sum} грн.
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};