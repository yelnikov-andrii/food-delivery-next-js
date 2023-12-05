import React, {Dispatch, SetStateAction} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '@/api';
import { useNormalizeProducts } from '../../hooks/useNormalizeProducts';
import { useSendData } from '../../hooks/useSendData';
import styles from './cart.module.scss';
import { clearCart } from '@/redux/slices/productSlice';
import { RootState } from '@/redux/store';
import { useSession } from 'next-auth/react';

interface Props {
  setFilled: Dispatch<SetStateAction<boolean>>;
}

export const CartForm: React.FC <Props> = ({ setFilled }) => {
  const[name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('+380');
  const [address, setAddress] = React.useState('');

  const productsInCart = useSelector((state: RootState) => state.product.products);
  const products = useNormalizeProducts(productsInCart);
  const dispatch = useDispatch();
  const { sendData } = useSendData();
  const { data: session } = useSession();

  function submit() {
    setName('');
    setPhone('');
    setAddress('');
    setFilled(true);
    localStorage.setItem('productsInCart', '');
    dispatch(clearCart());
  }

  return (
    <form 
      className={styles.cart__form} 
      onSubmit={(e) => {
        e.preventDefault();
        sendData({name, phone, address, products, email: session?.user?.email || null }, `${url}/orders`, submit);
      }}
    >
      <div 
        className={styles.cart__formRow}
      >
        <label
          className={styles.cart__formLabel}
        >
          Ім&apos;я
        </label>
        <input 
          type="text" 
          placeholder="Ім'я"
          required
          value={name}
          className={styles.cart__input}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div 
        className={styles.cart__formRow}
      >
        <label
          className={styles.cart__formLabel}
        >
          Телефон
        </label>
        <input 
          type="phone"
          placeholder="Телефон"
          required
          className={styles.cart__input}
          value={phone} 
          onChange={(e) => {
            if (!isNaN(+e.target.value)) {
              if (e.target.value.length <= 13) {
                setPhone(e.target.value);
              }
            }
          }}
        />
      </div>
      <div 
        className={styles.cart__formRow}
      >
        <label
          className={styles.cart__formLabel}
        >
          Адреса
        </label>
        <input 
          type="text" 
          placeholder="Адреса"
          className={styles.cart__input}
          required
          value={address} 
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
      </div>
      <div className={styles.cart__buttonWrapper}>
      <button
        type="submit"
        className={styles['cart__button--send'] + ' ' + styles['cart__button']}
      >
        Відправити
      </button>
      </div>
    </form>
  );
};