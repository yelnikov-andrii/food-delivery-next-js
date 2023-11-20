"use client";
import React from 'react'
import ModalCallback from './ModalCallback';
import { HeaderNav } from './HeaderNav';
import Link from 'next/link';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import styles from './pageStyle.module.scss';

export default function Header() {
  const [show, setShow] = React.useState(false);

  return (
    <Provider store={store}>
      <header className={styles.header}>
      <div className={styles.header__block}>
        <Link
          href="/"
          className={styles.header__link}
        >
          Food delivery
        </Link>
        <nav className={styles.header__nav}>
          {/* <div>
            <h3>
              Меню
            </h3>
          </div> */}
          <HeaderNav setShow={setShow} />
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
