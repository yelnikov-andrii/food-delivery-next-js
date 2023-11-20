'use client';
import React  from 'react';
import { ProductMainInfo } from './productMainInfo';
import { ProductWeightOrCount } from './productWeightOrCount';
import { ProductSizes } from './productSizes';
import { ProductSouses } from './productSouses';
import { ProductButtonAdd } from './productButtonAdd';
import Link from 'next/link';
import Image from 'next/image';
import { useAlert } from '@/hooks/useAlert';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import styles from './product.module.scss';

interface Props {
  product: any;
  link?: string;
}

export const Product: React.FC <Props> = ({ product, link }) => {
  const [selectedSize, setSelectedSize] = React.useState<number>(0);
  const [selectedSouse, setSelectedSouse] = React.useState<number>(0);
  const { show, showAlert } = useAlert();

  return (
    <Provider store={store}>
      <div className={styles.product}>
      <Link 
        href={link || product.id.toString()}
      >
        <Image 
          src={product.img}
          alt='product'
          className={styles.product__img}
          layout="responsive"
          width={100}
          height={100}
        />
      </Link>
      <div>
        <ProductMainInfo 
          product={product} 
        />
        {(product.weight || product.count) && (
          <ProductWeightOrCount
            product={product} 
          />
        )}
        {product.sizes && (
          <div className={styles.product__buttonsWrapper}>
            <ProductSizes 
              product={product}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          </div>
        )}
        {product.souses && (
          <div className={product.product__buttonsWrapper}>
            <ProductSouses 
              product={product}
              selectedSouse={selectedSouse}
              setSelectedSouse={setSelectedSouse}
            />
        </div>
        )}
        {product.price && (
          <p>
            <strong className={styles.product__price}>
              {`${product.price} грн.`}
            </strong>
          </p>
        )}
        {product.prices && (
          <p>
            <strong className={styles.product__price}>
              {`${product.prices[selectedSize]} грн.`}
            </strong>
          </p>
        )}
        <ProductButtonAdd
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
      </div>
    </Provider>
  );
};

