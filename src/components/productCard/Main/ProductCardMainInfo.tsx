'use client';
import React from 'react';
import styles from '../product.module.scss';
import Dropdown from '../../ui/myDropdown/Dropdown';
import { ProductInt } from '@/types';

interface Props {
  product: ProductInt;
}

export const ProductCardMainInfo: React.FC <Props> = ({product}) => {
  return (
    <div className={styles.product__mainInfo}>
      <div>
        <h1>
          {product.name}
        </h1>
      </div>
      <Dropdown
        buttonContent='Компоненти'
      >
        <div className={styles.product__components}>
          {product.components}
        </div>
      </Dropdown>
    </div>
  );
};

