import axios from 'axios'; 
import { url } from '../../api';

export default async function getProductById(productId: number) {
  const response = await axios.get(`${url}/products/${productId}`);
  return response.data;
}
