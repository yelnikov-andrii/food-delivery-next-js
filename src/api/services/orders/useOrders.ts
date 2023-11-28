/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { url } from '@/api';
import { useSession } from 'next-auth/react';

export const useOrders = () => {
  const { data: session }: any = useSession();

  const [orders, setOrders] = React.useState([]);
  const [ordersError, setOrdersError] = React.useState('');
  const [ordersLoading, setOrdersLoading] = React.useState(false);

  React.useEffect(() => {
    setOrdersLoading(true);
    if (!session?.user?.user) {
      setOrdersLoading(false);
      return;
    }

      axios.get(`${url}/orders/?email=${session?.user?.user?.email}`, {
        headers:{
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
      })
      .then(response => {
        setOrders(response.data);
      })
      .catch( (e) => {
      })
      .finally(() => {
        setOrdersLoading(false);
      });
  }, [session]);

  const ordersNormalized = orders.map((order: any) => {
    const date = new Date(order.createdAt);
    const newOrder = {...order, createdAt: date};
    return newOrder;
  });

  return { ordersNormalized, ordersError, ordersLoading };
};