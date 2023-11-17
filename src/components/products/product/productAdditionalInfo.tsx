'use client';
import React from 'react'
import { ProductCardSizes } from './productCardSizes'
import { ProductCardSouses } from './productCardSouses'
import { ProductCardWeightAndCount } from './productCardWeightAndCount'
import { ProductInt } from '@/app/types'
import { ProductPrices } from './productPrices'
import { ProductCardCounter } from './productCardCounter'
import { useAlert } from '@/app/hooks/useAlert'
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import styles from './product.module.scss';

interface Props {
  product: ProductInt;
}

export const ProductAdditionalInfo: React.FC <Props> = ({ product }) => {
  const [selectedSize, setSelectedSize] = React.useState<number>(0);
  const [selectedSouse, setSelectedSouse] = React.useState<number>(0);
  const { show, showAlert } = useAlert();
  
  return (
    <Provider store={store}>
      <div className={styles.product__additionalInfo}>
        <ProductCardSizes
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />
        <ProductCardSouses
          product={product}
          selectedSouse={selectedSouse}
          setSelectedSouse={setSelectedSouse}
        />
        <ProductCardWeightAndCount product={product} />
        {product.price && (
          <div>
            <strong className={styles.product__price}>
              {`${product.price} грн.`}
            </strong>
          </div>
        )}
        {product.prices && (
          <ProductPrices
            product={product}
            selectedSize={selectedSize}
          />
        )}
        <ProductCardCounter
          product={product}
          selectedSize={selectedSize}
          selectedSouse={selectedSouse}
          showAlert={showAlert}
        />
        <div 
          className={show ? styles.product__alert : styles.product__alert + ' ' + styles['product__alert--hidden']}
        >
          Товар доданий до кошику
        </div>
      </div>
    </Provider>
  )
}
