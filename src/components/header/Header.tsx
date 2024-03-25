"use client";
import React from 'react'
import ModalCallback from './ModalCallback/ModalCallback';
import { HeaderNav } from './Nav/HeaderNav';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import styles from './pageStyle.module.scss';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

export default function Header() {
  const [show, setShow] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState<string>('up');
  const [prevScrollY, setPrevScrollY] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <Provider store={store}>
      <header className={scrollDirection === 'down' ? styles.header + ' ' + styles['header--scrolled'] : styles.header}>
      <div className={styles.header__block}>
        <Link
          href="/"
          className={styles.header__link}
        >
          <Image 
            src={logo}
            alt='logo'
            width={30}
            height={30}
          />
        </Link>
        <nav className={styles.header__nav}>
          <div className={styles.header__menu}>
            <h3 
              onClick={() => {
                setMenuOpen(true);
              }}
              className={styles.header__menuH3}
            >
              Меню
            </h3>
          </div>
          <HeaderNav
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setShow={setShow} />
        </nav>
        <ModalCallback 
          show={show} 
          setShow={setShow} 
        />
      </div>
    </header>
    </Provider>
  );
};
