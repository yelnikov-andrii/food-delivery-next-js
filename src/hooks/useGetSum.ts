/* eslint-disable react-hooks/exhaustive-deps */
import { ProductAddedInt } from '@/types';
import React from 'react';

export const useGetSum = (productsInCart: ProductAddedInt[], initialProducts: ProductAddedInt[] = []) => {
  const sum = React.useMemo(() => {
    if (initialProducts.length === 0) {
      return productsInCart.reduce((initialValue: number, product: ProductAddedInt) => initialValue 
      + ((product.prices && product?.quantity * product.prices[product?.selectedSize]) 
      || product?.quantity * product?.price), 0);
    } else {
      return productsInCart.reduce((initialValue: number, product: ProductAddedInt, index: number) => initialValue 
      + ((product.prices && initialProducts[index]?.quantity 
        * product.prices[initialProducts[index]?.selectedSize]) || initialProducts[index]?.quantity * product.price), 0);
    }
    
  }, [productsInCart]);

  return { sum };
};
