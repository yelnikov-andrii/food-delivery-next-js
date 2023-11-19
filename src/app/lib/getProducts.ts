import React from 'react'
import axios from 'axios';
import { url } from '@/api';

export default async function getProducts(typeId: number, filterType: string, page: number) {
  const response = await axios.get(`${url}/products?typeId=${typeId}&category=${filterType}&limit=9&page=${page}`);
  return response.data;
}
