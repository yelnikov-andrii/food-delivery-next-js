/* eslint-disable react-hooks/exhaustive-deps */
"use client";
// import { useLogout } from '@/app/API/services/auth/useLogOut';
import { navLinks, phones } from '@/app/data/headerData';
// import { useGetCountOfProducts } from '@/app/hooks/useGetCountOfProducts';
import { NavLink } from '@/app/types';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './headernav.module.scss';
import { getProducts } from '@/app/redux/slices/productSlice';
import { useGetCountOfProducts } from '@/app/hooks/useGetCountOfProducts';
import { useCheckAuth } from '../../api/services/auth/useCheckAuth';
import Dropdown from '../../components/ui/myDropdown/dropdown';

interface Props {
  setShow: Dispatch<SetStateAction<boolean>>
}

export const HeaderNav: React.FC <Props> = ({ setShow }) => {
  const accessToken = localStorage.getItem('accessToken');
  // const user = useSelector((state: any) => state.auth.user);
  const handleShow = () => setShow(true);
  const countOfProducts = useGetCountOfProducts();

  // const { logout } = useLogout();

  const productsInCart = useSelector((state: any) => state.product.products);
  const dispatch = useDispatch();
  const { refresh } = useCheckAuth();

  React.useEffect(() => {
    const productsFromStorage = localStorage.getItem('productsInCart') 
      ? JSON.parse(localStorage.getItem('productsInCart') || '{}') : null;
    if (productsFromStorage) {
      dispatch(getProducts(productsFromStorage));
    }
    refresh();
  }, []);

  React.useEffect(() => {
    if (productsInCart.length) {
      localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
    }
  }, [productsInCart]);

  return (
    <nav className={styles.headerNav}>
      <>
      <Link 
        href="/"
        className={styles.headerNav__link}
      >
        Головна
      </Link>
      {navLinks.map((navLink: NavLink) => (
        <Link 
          href={navLink.url} 
          key={navLink.name}
          className={styles.headerNav__link}
        >
          {navLink.name}
        </Link>
      ))}
    </>
    <Dropdown
      buttonContent='Телефони'
    >
      {phones.map((phone) => (
          <a 
            href={`tel:${phone}`} 
            key={phone}
            className={styles.headerNav__link}
          >
            {phone}
          </a>
        ))}
    </Dropdown>
      <button 
        onClick={handleShow}
        className={styles.headerNav__button}
      >
        Замовити дзвінок
      </button>
      {!accessToken ? (
        <div className={styles.headerNav__auth}>
          <Link 
            href="/login"
            className={styles.headerNav__link}
          >
            Логін
          </Link>
          <Link 
            href="/registration"
            className={styles.headerNav__link}
          >
            Реєстрація
          </Link>
        </div>
      ) : (
        <div className={styles.headerNav__auth}>
          <div onClick={(e) => {
            e.preventDefault();
            // logout();
          }}>
            Вийти
          </div>
          <Link 
            href="/personal-account"
            className={styles.headerNav__link}
          >
              Кабінет особистий
          </Link>
        </div>
      )}
      <Link 
        href="cart"
        className={styles.headerNav__link}
      >
      <div className={styles.headerNav__cart}>
        Кошик 
        {countOfProducts > 0 && 
        (
          <span className={styles['headerNav__cart--count']}>
            {countOfProducts}
          </span>
        )}
      </div>
    </Link>
    </nav>
  );
};

