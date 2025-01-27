import React from 'react';
import getProductById from '@/app/lib/getProductById';
import styles from './page.module.scss';
import Image from 'next/image';
import getProductsByCategory from '@/app/lib/getProductsByCategory';
import { ProductCardMainInfo } from './components/Main/ProductCardMainInfo';
import { ProductAdditionalInfo } from './components/Additional/ProductAdditionalInfo';
import { Products } from '../components/Products';


export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug;

  if (slug.length === 2) {
    const product = await getProductById(+slug[1]);

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
    )
  }

  if (slug.length === 1) {
    const category: keyof typeof types = slug[0] as keyof typeof types;

    const types = {
      pizzas: { typeId: 1, name: 'Піца', slug: 'pizzas' },
      sushi: { typeId: 2, name: 'Суші', slug: 'sushi' },
      shaurma: { typeId: 3, name: 'Шаурма', slug: 'shaurma' },
      salads: { typeId: 4, name: 'Салати', slug: 'salads' },
      mangal: { typeId: 5, name: 'Мангал', slug: 'mangal' },
      snacks: { typeId: 6, name: 'Закуски', slug: 'snacks' },
      soupes: { typeId: 7, name: 'Супи', slug: 'soupes' },
    };

    interface TypeIdInt {
      typeId: number | undefined;
      name: string;
      slug: string;
    }

    const type: TypeIdInt = types[category];

    if (type.typeId) {
      const products = await getProductsByCategory(type.typeId);

      return (
        <div>
          <Products
            name={type.name}
            category={type.slug}
            products={products}
          />
        </div>
      )
    } else {
      return { notFound: true };
    }

  }

  return (
    <h2>
      Помилка, продуктів не знайдено, щось пішло не так
    </h2>
  )
}

