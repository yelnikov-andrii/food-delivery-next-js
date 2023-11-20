'use client';import { ProductInt } from '@/types';
import React from 'react';

interface Props {
  product: ProductInt;
  selectedSize: number;
}

export const ProductPrices: React.FC <Props> = ({ product, selectedSize }) => {
  return (
    <div>
      {product.prices && (
        <strong className='productCard__price'>
        {`${product.prices[selectedSize]} грн.`}
      </strong>
      )}
    </div>
  )
}
