/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useGetSum } from '@/hooks/useGetSum';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './cart.module.scss';
import { useChangeBooleanWithTimeSpan } from '@/hooks/useChangeBooleanWithTimeSpan';
import { CartEmpty } from './CartEmpty';
import { CartTable } from './CartTable';
import { CartForm } from './CartForm';
import { CartAfterFilledForm } from './CartAfterFilled';
import { getProducts } from '@/redux/slices/productSlice';
import { ProductInt } from '@/types';

export const CartBlock = () => {
  const productsInCart = useSelector((state: any) => state.product.products);
  const { sum } = useGetSum(productsInCart);
  const [filled, setFilled]: any = 
  useChangeBooleanWithTimeSpan(false, false, 3000);
  const dispatch = useDispatch();
  const [productsFromStorage, setProductsFromStorage] = React.useState<ProductInt[]>([]);

  React.useEffect(() => {
    const productsParsed = localStorage.getItem('productsInCart') 
      ? JSON.parse(localStorage.getItem('productsInCart') || '{}') : null;

    if (productsParsed) {
      dispatch(getProducts(productsParsed));
      setProductsFromStorage(productsParsed);
    }
  }, []);
  

  if ((!productsFromStorage.length || !productsInCart.length) && filled === false) {
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