/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { url } from '@/api';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export const useOrder = (orderId: number) => {
  const { data: session }: any = useSession();
  const router = useRouter();
  const [order, setOrder] = React.useState<any>();
  const [orderError, setOrderError] = React.useState('');
  const [orderLoading, setOrderLoading] = React.useState(false);

  React.useEffect(() => {
    setOrderLoading(true);
    axios.get(`${url}/orders/?id=${orderId}`, {
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
      },
    })
      .then(response => {
        setOrder(response.data);
      })
      .catch( (e) => {
      })
      .finally(() => {
        setOrderLoading(false);
      });
  }, [session]);

  return { order, orderError, orderLoading };
};
