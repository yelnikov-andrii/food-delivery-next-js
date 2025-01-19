import React from 'react';
import { useSession } from "next-auth/react";
import axios from 'axios';
import { url } from '@/api';

export const useAllOrders = () => {
  const { data: session }: any = useSession();

  const [orders, setOrders] = React.useState([]);
  const [ordersError, setOrdersError] = React.useState('');
  const [ordersLoading, setOrdersLoading] = React.useState(true);

  React.useEffect(() => {
    setOrdersLoading(true);
    if (session?.user?.user.role !== 'admin') {
      setOrdersLoading(false);
      return;
    }

      axios.get(`${url}/orders?role=${session.user.user.role || 'user'}`)
      .then(response => {
        setOrders(response.data);
      })
      .catch( (e) => {
        console.error(e)
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