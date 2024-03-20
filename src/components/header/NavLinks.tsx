import { navLinks } from '@/data/headerData';
import { NavLink } from '@/types';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './headernav.module.scss';

interface Props {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavLinks: React.FC<Props> = ({ setMenuOpen }) => {
  return (
    <>
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
  )
}
