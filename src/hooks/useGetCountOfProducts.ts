/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from '@/redux/store';
import { ProductAddedInt } from '@/types';
import React from 'react';
import { useSelector } from 'react-redux';

export const useGetCountOfProducts = () => {
  const productsInCart = useSelector((state: RootState) => state.product.products);
  const getCountOfProducts = () => {
    return productsInCart.reduce((initialValue: number, product: ProductAddedInt) => initialValue + product.quantity, 0);
  };

  const countOfProducts = React.useMemo(() => {
    return getCountOfProducts();
  }, [productsInCart]);

  return countOfProducts;
};