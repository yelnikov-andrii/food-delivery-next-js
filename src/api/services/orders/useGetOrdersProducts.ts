/* eslint-disable react-hooks/exhaustive-deps */
import { url } from '@/api';
import { ProductAddedInt, ProductInt } from '@/types';
import axios from 'axios';
import React from 'react';

interface Order {
  id: string;
  products: string;
}

export const useGetOrdersProducts = (order: Order) => {
  const [initialProducts, setInitialProducts] = React.useState<any[]>([]);
  const [products, setProducts] = React.useState<ProductAddedInt[]>([]);

  async function getProduct(id: number) {
    return axios.get(`${url}/products/${id}`)
      .then(response => response.data);
  }

  React.useEffect(() => {
    if (order) {
      const productsInCart = JSON.parse(order.products).map((product: ProductInt) => product);
      setInitialProducts(productsInCart);
      const produtPromises = JSON.parse(order.products).map((product: any) => {
        if (typeof(product.id) === 'string' && product.id.indexOf('s')) {
          return product.id.slice(0, product.id.indexOf('s'));
        } else {
          return product.id;
        }
      }).map(async (p: any) => {
        const pro = await getProduct(p);
        setProducts(products => [...products, pro]);
        return pro;
      });
      Promise.all(produtPromises).then(values => setProducts(values));
    }
  }, [order]);

  return { initialProducts, products };
};
