/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useGetSum } from '@/hooks/cart/useGetSum';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './cart.module.scss';
import { useChangeBooleanWithTimeSpan } from '@/hooks/cart/useChangeBooleanWithTimeSpan';
import { CartEmpty } from './EmptyCart/CartEmpty';
import { CartTable } from './Table/CartTable';
import { CartForm } from './Form/CartForm';
import { CartAfterFilledForm } from './AfterFilledForm/CartAfterFilled';
import { getProducts } from '@/redux/slices/productSlice';
import { ProductInt } from '@/types';
import { RootState } from '@/redux/store';

export const CartBlock = () => {
  const productsInCart = useSelector((state: RootState) => state.product.products);
  const { sum } = useGetSum(productsInCart);
  const [filled, setFilled]: any = useChangeBooleanWithTimeSpan(false, false, 3000);
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
      <div className={styles.cart}>
        <CartEmpty />
      </div>
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
        <CartForm 
          setFilled={setFilled} 
        />
      </>
    ) : (
      <CartAfterFilledForm />
    )}
    </div>
  )
}