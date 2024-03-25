'use client';
import { useGetOrdersProducts } from '@/api/services/orders/useGetOrdersProducts';
import { useOrder } from '@/api/services/orders/useOrder';
import { useGetSum } from '@/hooks/cart/useGetSum';
import React from 'react';
import { OrderTable } from './OrderTable';
import styles from './order.module.scss';
import { ChangeStatus } from './ChangeStatus';
import { MyModal } from '../../ui/myModal/MyModal';

export const Order: React.FC <any> = ({ id }) => {
  const [active, setActive] = React.useState(false);
  const { order, orderLoading, orderError } = useOrder(id);
  const { initialProducts, products } = useGetOrdersProducts(order);
  const { sum } = useGetSum(products, initialProducts);

  if (orderError) {
    return (
      <p>
        Error {orderError}
      </p>
    );
  }

  return (
    <div className={styles.order}>
      {orderLoading === true ? (
        <div>
          Loading...
        </div>
      ) : (
        <>
          {order && (
            <>
              <h1 className={styles.order__header}>
                {new Date(order.createdAt).toUTCString().slice(0, -4)}
              </h1>
              <h2 className={styles.order__status}>
                <span>
                  Статус: {order.status}
                </span>
                <button 
                  className={styles.order__button}
                  onClick={() => {
                    setActive(true);
                  }}
                >
                  Змінити статус
                </button>
              </h2>
              <p className={styles.order__address}>
                Адреса: {order.address}
              </p>
              Продукти:
              <OrderTable 
                initialProducts={initialProducts}
                products={products}
              />
              <p className={styles.order__sum}>
                Сума замовлення: {sum} грн.
              </p>
            </>
          )}
        </>
      )}
      <MyModal
        active={active}
        setActive={setActive}
      >
        <ChangeStatus 
          orderId={id}
          setActive={setActive}
        />
      </MyModal>
    </div>
  );
};