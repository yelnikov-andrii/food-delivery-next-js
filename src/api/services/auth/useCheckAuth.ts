import { url } from '../..';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const useCheckAuth = () => {
  async function refresh() {
    return axios.get(`${url}/refresh`)
      .then(response => {
        localStorage.setItem('accessToken', response.data.accessToken);
      });
  };

  return { refresh };
};