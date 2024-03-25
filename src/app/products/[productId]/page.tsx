import React from 'react';
import Image from 'next/image';
import getProductById from '@/app/lib/getProductById';
import styles from './page.module.scss';
import { ProductCardMainInfo } from '../../../components/productCard/Main/ProductCardMainInfo';
import { ProductAdditionalInfo } from '../../../components/productCard/Additional/ProductAdditionalInfo';
import type { Metadata, ResolvingMetadata } from 'next';
 
type Props = {
  params: { productId: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const id = params.productId;
 
  const product = await getProductById(+id);

 
  return {
    title: product.name,
    description: product.description
  }
}

export default async function ProductItem({
  params: { productId },
}: {
  params: { productId: string }
}) {

  const product = await getProductById(+productId);
  
  return (
    <div className={styles.product}>
      <div className={styles.product__block}>
        <div className={styles.product__img}>
          <Image 
            src={product && product.img} 
            alt="" 
            width={100}
            height={100}
            layout='responsive'
          />
        </div>
        <div className={styles.product__info}>
          {product && (
            <>
              <ProductCardMainInfo 
                product={product}
              />
              <ProductAdditionalInfo 
                product={product}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
