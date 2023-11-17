'use client';
import React from 'react';
import styles from './product.module.scss';
import Dropdown from '../../UI/MyDropdown/Dropdown';

export const ProductCardMainInfo: React.FC <any> = ({product}) => {
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

