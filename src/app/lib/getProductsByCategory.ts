import axios from 'axios'
import React from 'react'
import { url } from '../../api';

export default async function getProductsByCategory(typeId: number) {
  const response = await axios.get(`${url}/products?typeId=${typeId}&count=3`);
  return response.data;
}
