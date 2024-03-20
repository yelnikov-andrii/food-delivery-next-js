import React, {ChangeEvent, Dispatch, SetStateAction} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { url } from '@/api';
import { useNormalizeProducts } from '../../hooks/useNormalizeProducts';
import { useSendData } from '../../hooks/useSendData';
import styles from './cart.module.scss';
import { clearCart } from '@/redux/slices/productSlice';
import { RootState } from '@/redux/store';
import { useSession } from 'next-auth/react';
import { CartFormInputBlock } from './CartFormInputBlock';

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
  const { data: session }: any = useSession();

  function submit() {
    setName('');
    setPhone('');
    setAddress('');
    setFilled(true);
    localStorage.setItem('productsInCart', '');
    dispatch(clearCart());
  }

  function changeName(e: any) {
    setName(e.target.value);
  }

  function changePhone(e: any) {
    if (!isNaN(+e.target.value)) {
      if (e.target.value.length <= 13) {
        setPhone(e.target.value);
      }
    }
  }

  function changeAddress(e: any) {
    setAddress(e.target.value);
  }

  return (
    <form 
      className={styles.cart__form} 
      onSubmit={(e) => {
        e.preventDefault();
        sendData({name, phone, address, products, email: session?.user?.user.email || null }, `${url}/orders`, submit);
      }}
    > 
      <CartFormInputBlock
        placeholder={`Ім'я`}
        value={name}
        onChange={changeName}
        required={true}
        label={`Ім'я`}
        type="text"
      />
      <CartFormInputBlock
        placeholder='Телефон'
        value={phone}
        onChange={changePhone}
        required={true}
        label='Телефон'
        type='phone'
      />
      <CartFormInputBlock
        placeholder='Адреса'
        value={address}
        onChange={changeAddress}
        required={true}
        label='Адреса'
        type='text'
      />
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