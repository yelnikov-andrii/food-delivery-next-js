/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './headernav.module.scss';
import { getProducts } from '@/redux/slices/productSlice';
import { useGetCountOfProducts } from '@/hooks/cart/useGetCountOfProducts';
import { RootState } from '@/redux/store';
import { Phones } from './Phones/Phones';
import { NavLinks } from './Links/NavLinks';
import { CallBack } from './CallBack/CallBack';
import { Cart } from './Cart/Cart';
import { MainLinkBlock } from './MainLinkBlock/MainLinkBlock';
import { Auth } from './Auth/Auth';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const HeaderNav: React.FC <Props> = ({ setShow, menuOpen, setMenuOpen }) => {
  const handleShow = () => setShow(true);
  const countOfProducts = useGetCountOfProducts();

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
        <MainLinkBlock 
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
      <Auth />
      <Cart 
        countOfProducts={countOfProducts}
      />
    </nav>
  );
};

