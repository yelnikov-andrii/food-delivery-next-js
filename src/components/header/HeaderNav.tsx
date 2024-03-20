/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './headernav.module.scss';
import { getProducts } from '@/redux/slices/productSlice';
import { useGetCountOfProducts } from '@/app/../hooks/useGetCountOfProducts';
import { RootState } from '@/redux/store';
import { signIn, signOut, useSession } from 'next-auth/react';
import { CloseButton } from './CloseButton';
import { Phones } from './Phones';
import { ButtonsAuthorized } from './ButtonsAuthorized';
import { MainLink } from './MainLink';
import { NavLinks } from './NavLinks';
import { CallBack } from './CallBack';
import { Login } from './Login';
import { Cart } from './Cart';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderNav: React.FC <Props> = ({ setShow, menuOpen, setMenuOpen }) => {
  const handleShow = () => setShow(true);
  const countOfProducts = useGetCountOfProducts();
  const { data: session }: any = useSession();

  const productsInCart = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const productsFromStorage = localStorage.getItem('productsInCart') 
      ? JSON.parse(localStorage.getItem('productsInCart') || '{}') : null;
    if (productsFromStorage) {
      dispatch(getProducts(productsFromStorage));
    }
  }, []);

  React.useEffect(() => {
    if (productsInCart.length) {
      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
    }
  }, [productsInCart]);

  return (
    <nav className={menuOpen ? styles.headerNav : styles['headerNav--closed']}>
      <>
        <CloseButton 
          setMenuOpen={setMenuOpen}
        />
        <MainLink 
          setMenuOpen={setMenuOpen}
        />
        <NavLinks 
          setMenuOpen={setMenuOpen}
        />
      </>
      <Phones />
      <CallBack 
        handleShow={handleShow}
      />
      {session && session.user ? (
        <ButtonsAuthorized 
          signOut={signOut}
        />
      ) : (
            <Login 
              signIn={signIn}
            />
          )}
      <Cart 
        countOfProducts={countOfProducts}
      />
    </nav>
  );
};

