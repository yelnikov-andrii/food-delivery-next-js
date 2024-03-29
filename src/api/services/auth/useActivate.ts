/* eslint-disable react-hooks/exhaustive-deps */
import { url } from '../../';
import React from 'react';
import axios from 'axios';

export const useActivate = (activationToken: string) => {
  const [isActivated, setIsActivated] = React.useState(false);
  const [checking, setChecking] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const prevActivationTokenRef = React.useRef<string | null>(null);

  React.useEffect(() => {
    if (activationToken !== prevActivationTokenRef.current) {
      if (!activationToken) return;

      setChecking(true);
      axios.get(`${url}/activation/${activationToken}`)
        .then(response => {
          localStorage.setItem('accessToken', response.data.accessToken);
          setIsActivated(true);
        })
        .catch((e) => {
          setIsActivated(false);
        })
        .finally(() => {
          setChecking(false);
          setChecked(true);
        });

      prevActivationTokenRef.current = activationToken;
    }
  }, [activationToken]);

  return { isActivated, checked, checking };
};
