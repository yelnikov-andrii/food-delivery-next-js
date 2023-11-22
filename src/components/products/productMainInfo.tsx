import Link from 'next/link';
import React from 'react';
import styles from './product.module.scss';
import Dropdown from '../../components/ui/myDropdown/dropdown';
import { ProductInt } from '@/types';

interface Props {
  product: ProductInt;
}

export const ProductMainInfo: React.FC <Props> = ({ product }) => {
  return (
    <div className={styles.product__mainInfo}>
      <Link href={product.id.toString()} >
        <h2 className={styles.product__name}>
          {product.name}
        </h2>
      </Link>
      {product.components && (
        <div className={styles.product__dropdownWrapper}>
        <Dropdown
          buttonContent='Компоненти'
        >
          <div className={styles.product__components}>
            {product.components}
          </div>
        </Dropdown>
        </div>
      )}
    </div>
  );
};

