import React from 'react'
import { url } from '../API';
import axios from 'axios';

export default async function getProducts(typeId: number, filterType: string, page: number) {
  const response = await axios.get(`${url}/products?typeId=${typeId}&category=${filterType}&limit=9&page=${page}`);
  return response.data;
}
