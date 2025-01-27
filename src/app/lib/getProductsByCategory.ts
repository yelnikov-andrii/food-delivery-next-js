import axios from 'axios'
import { url } from '../../api';

export default async function getProductsByCategory(typeId: number, randomise?: boolean, category?: string) {
  try {
    const response = await axios.get(`${url}/products?typeId=${typeId}`);
    const products = await response.data;

    if (!randomise) {
      return products;
    }

    const randomProducts = [];
    const indices = new Set<number>();

    while (randomProducts.length < 3) {
      const randomNum = Math.floor(Math.random() * products.length);

      if (!indices.has(randomNum)) {
        indices.add(randomNum);
        randomProducts.push(products[randomNum]);
      }
    }

    return randomProducts;
  } catch(e) {
    console.error('Error fetching products:', e);
    throw e;
  }
}
