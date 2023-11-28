'use client';
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { UserAuth } from '@/types';
import { setUser } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { url } from '@/api';

export const useLogin = ({ email, password }: UserAuth) => {
  const [error, setError] = React.useState('');
  const [emailErrorRequest, setEmailErrorRequest] = React.useState('');
  const [passwordErrorRequest, setPasswordErrorRequest] = React.useState('');
  const dispatch = useDispatch();
  const navigation = useRouter();

  function login() {
    setEmailErrorRequest('');
    setPasswordErrorRequest('');
    setError('');
    axios.defaults.withCredentials = true;
    axios.post(`${url}/login`, {email, password})
      .then(response => {
        dispatch(setUser(response.data.user));
        localStorage.setItem('accessToken', response.data.accessToken);
        navigation.push('/account');
      })
      .catch((e) => {
        setError(e.response.data.message);
        if (e.response.data.errors && e.response.data.errors.email) {
          setEmailErrorRequest(e.response.data.errors.email);
        }

        if (e.response.data.errors && e.response.data.errors.password) {
          setPasswordErrorRequest(e.response.data.errors.password);
        }
      });
  }

  return { login, error, emailErrorRequest, passwordErrorRequest };
};
