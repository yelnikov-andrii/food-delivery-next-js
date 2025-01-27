'use client';
import Image from 'next/image';
import React from 'react';
import styles from './order.module.scss';

export const OrderTableBody: React.FC <any> = ({ initialProducts, products }) => {
  return (
    <tbody>
      {products && products.map((product: any, index: number) => (
        <tr 
          key={product.id.toString() + index.toString()}
          className={styles.order__tableRow}
        >
          <td className={styles.order__photo}>
            <Image 
              src={product.img}
              width={80}
              height={80}
              alt="" 
              layout='responsive'
            />
          </td>
          <td>
            {product.name}
          </td>
          <td className={styles.order__size}>
            {!initialProducts[index]?.hasOwnProperty('selectedSize') ? 
              '-' : initialProducts[index]?.selectedSize === 0 ? '32 см' : '42 см'}
          </td>
          <td className={styles.order__souse}>
            {initialProducts[index]?.selectedSouse || '-'}
          </td>
          <td className={styles.order__tablePrice}>
            {(product.prices && product.prices[initialProducts[index]?.selectedSize]) || product.price}
          </td>
          <td>
            {initialProducts[index]?.quantity}
          </td>
          <td>
            {(product.prices && initialProducts[index]?.quantity * product.prices[initialProducts[index]?.selectedSize]) 
            || product.price * initialProducts[index]?.quantity}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

