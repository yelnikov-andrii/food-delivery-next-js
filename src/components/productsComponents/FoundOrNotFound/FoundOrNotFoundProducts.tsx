import React from 'react';
import styles from '../products.module.scss';
import { ProductInt } from '@/types';
import { Product } from './Product';

interface Props {
  sortedProducts: ProductInt[];
}

export const FoundOrNotFoundProducts: React.FC<Props> = ({ sortedProducts }) => {
  return (
   <>
   {sortedProducts.length === 0 ? (
      <div>
        <h2 className={styles.products__h2}>
          Продукти не були знайдені
        </h2>
      </div>
    ) : (
      sortedProducts && sortedProducts.map((product: ProductInt) => (
        <div 
          className={styles.products__item}
          key={product.id}
        >
          <Product 
            product={product} 
          />
        </div>
      ))
    )}
   </>
  )
}
