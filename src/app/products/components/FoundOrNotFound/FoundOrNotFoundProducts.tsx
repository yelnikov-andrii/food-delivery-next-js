import React from 'react';
import styles from '../products.module.scss';
import { Product } from './Product';

interface Props {
  sortedProducts: ProductInt[];
  category: string;
}

export const FoundOrNotFoundProducts: React.FC<Props> = ({ sortedProducts, category }) => {
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
            category={category}
          />
        </div>
      ))
    )}
   </>
  )
}
