/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { navLinks, phones } from '@/app/../data/headerData';
import { NavLink } from '@/app/../types';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './headernav.module.scss';
import { getProducts } from '@/redux/slices/productSlice';
import { useGetCountOfProducts } from '@/app/../hooks/useGetCountOfProducts';
import { useCheckAuth } from '../../api/services/auth/useCheckAuth';
import Dropdown from '../../components/ui/myDropdown/dropdown';
import { RootState } from '@/redux/store';
import { signIn, signOut, useSession } from 'next-auth/react';

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
      <div 
        className={styles.headerNav__close}
      >
        <div 
          onClick={() => {
            setMenuOpen(false);
          }}
          className={styles.headerNav__closeButton}
        >
          <span className={styles.headerNav__closeButtonSpan}></span>
          <span className={styles.headerNav__closeButtonSpan}></span>
        </div>
      </div>
      <Link 
        href="/"
        className={styles.headerNav__link}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        Головна
      </Link>
      {navLinks.map((navLink: NavLink) => (
        <Link 
          href={navLink.url} 
          key={navLink.name}
          className={styles.headerNav__link}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          {navLink.name}
        </Link>
      ))}
    </>
      <div className={styles.headerNav__row}>
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
      </div>
      <div className={styles.headerNav__row}>
        <button 
          onClick={handleShow}
          className={styles.headerNav__button}
        >
          Замовити дзвінок
        </button>
      </div>
      {session && session.user ? (
        <div className={styles.headerNav__auth}>
          <a 
            onClick={(e) => {
              signOut();
            }}
            className={styles.headerNav__link}
          >
            Вийти
          </a>
          <Link 
            href="/account"
            className={styles.headerNav__link}
          >
              Кабінет особистий
          </Link>
        </div>
      ) : (
          <a 
            onClick={() => {
              signIn()
            }}
            className={styles.headerNav__link}
          >
            Увійти
          </a>
      )}
      <Link 
        href="/cart"
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

