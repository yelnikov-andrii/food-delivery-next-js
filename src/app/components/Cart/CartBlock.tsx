'use client';
import { useGetSum } from '@/app/hooks/useGetSum';
import React from 'react'
import { useSelector } from 'react-redux';
import styles from './cart.module.scss';
import { useChangeBooleanWithTimeSpan } from '@/app/hooks/useChangeBooleanWithTimeSpan';
import { CartEmpty } from './CartEmpty';
import { CartTable } from './CartTable';
import { CartForm } from './CartForm';
import { CartAfterFilledForm } from './CartAfterFilledForm';

export const CartBlock = () => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const { sum } = useGetSum(productsInCart);
  const [filled, setFilled]: any = 
  useChangeBooleanWithTimeSpan(false, false, 3000);

  if (productsInCart.length === 0 && filled === false) {
    return (
      <CartEmpty />
    );
  };
  return (
    <div>
      {!filled ? (
      <>
        <h2 className={styles.cart__h2}>
          Оформлення замовлення
        </h2>
        <CartTable />
        <p className={styles.cart__sum}>
          Сума до оплати: {sum} грн.
        </p>
        <CartForm setFilled={setFilled} />
      </>
    ) : (
      <CartAfterFilledForm />
    )}
    </div>
  )
}
