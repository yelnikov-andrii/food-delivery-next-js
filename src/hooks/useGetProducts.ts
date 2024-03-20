import React from "react";
import axios from "axios";
import { url } from "@/api";

export const useGetProducts = (filterType: string, appliedInput: string, typeId: number, page: number) => {
  const getProducts = React.useCallback(() => {
    if (filterType === 'Усі') {
      if (appliedInput) {
        return axios.get(`${url}/products?typeId=${typeId}`);
      }

      return axios.get(`${url}/products?typeId=${typeId}&limit=9&page=${page}`);
    } else {

      if (appliedInput) {
        return axios.get(`${url}/products?typeId=${typeId}&category=${filterType}`);
      }

      return axios.get(`${url}/products?typeId=${typeId}&category=${filterType}&limit=9&page=${page}`);
    }
  }, [filterType, page, appliedInput, typeId]);

  return getProducts;
}