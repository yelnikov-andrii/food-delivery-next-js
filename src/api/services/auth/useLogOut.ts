import { setUser } from '@/app/redux/slices/authSlice';
import { url } from '../../../API/index';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// export const useLogout = () => {
//   const dispatch = useDispatch();
//   function logout() {
//     axios.get(`${url}/logout`);
//     dispatch(setUser(null));
//     localStorage.setItem('accessToken', '');
//   }

//   return { logout };
// };