import { url } from '@/api';
import axios from 'axios';
import React, { useState } from 'react';


export const useProductsByCategory = (typeId: number) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProductInt[] | null>(null);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/products?typeId=${typeId}&count=3`);
        setData(response.data);
      } catch (error: any) {
        setError(error.response.data.message || 'Something went wrong');
      }
      setLoading(false);
    };
    fetchData();
  }, [typeId]);

  return [data, loading, error];
};

