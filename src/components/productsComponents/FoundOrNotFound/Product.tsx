'use client';
import React  from 'react';
import { ProductMainInfo } from './MainInfo/ProductMainInfo';
import { ProductWeightOrCount } from './WeightOrCount/ProductWeightOrCount';
import { ProductSizes } from './Size/ProductSizes';
import { ProductSouses } from './Souse/ProductSouses';
import { ProductButtonAdd } from './AddButton/ProductButtonAdd';
import Link from 'next/link';
import Image from 'next/image';
import { useAlert } from '@/hooks/alert/useAlert';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import styles from './product.module.scss';
import { ProductInt } from '@/types';
import { useSession } from 'next-auth/react';
import { ProductButtonLike } from './LikeButton/ProductButtonLike';

interface Props {
  product: ProductInt;
  link?: string;
}

export const Product: React.FC <Props> = ({ product, link }) => {
  const [selectedSize, setSelectedSize] = React.useState<number>(0);
  const [selectedSouse, setSelectedSouse] = React.useState<number>(0);
  const { show, showAlert } = useAlert();
  const { data: session }: any = useSession();
  console.log(session);

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
          link={link || product.id.toString()}
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
          <div className={styles.product__buttonsWrapper}>
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
        <div className={styles.product__buttonAddWrapper}>
          <ProductButtonAdd
            product={product}
            selectedSize={selectedSize}
            selectedSouse={selectedSouse}
            showAlert={showAlert}
          />
          {session?.user?.user && (
            <ProductButtonLike />
          )}
        </div>
        <div 
          className={show ? styles.product__alert : styles.product__alert + ' ' + styles['product__alert--hidden']}
        >
          Продукт доданий до кошику
        </div>
      </div>
      </div>
    </Provider>
  );
};

