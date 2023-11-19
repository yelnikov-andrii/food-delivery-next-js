/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useCheckAuth } from '../auth/useCheckAuth';
import { url } from '@/api';
import { setUser } from '@/app/redux/slices/authSlice';
import { useRouter } from 'next/router';

export const useOrder = () => {
  const accessToken = localStorage.getItem('accessToken');
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = React.useState<any>();
  const [orderError, setOrderError] = React.useState('');
  const [orderLoading, setOrderLoading] = React.useState(false);
  const { refresh } = useCheckAuth();
  const dispatch = useDispatch();

  React.useEffect(() => {
    setOrderLoading(true);
    axios.get(`${url}/orders/?id=${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        setOrder(response.data);
      })
      .catch( (e) => {
        if (e.response.status === 401) {
          refresh()
            .then(() => {
              const accessToken = localStorage.getItem('accessToken');
              axios.get(`${url}/orders/?id=${id}`, {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
              })
                .then(response => {
                  setOrder(response.data);
                  setOrderLoading(true);
                })
                .catch((e) => {
                  if (e.response.status === 401) {
                    dispatch(setUser(null));
                    localStorage.setItem('accessToken', '');
                  }
                  setOrderError(e.response.data.message);
                  setOrderLoading(false);
                })
                .finally(() => {
                  setOrderLoading(false);
                });
            });
        }
      })
      .finally(() => {
        setOrderLoading(false);
      });
  }, []);

  return { order, orderError, orderLoading };
};
