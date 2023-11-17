'use client'
import React from 'react';
import styles from './dropdown.module.scss';

export default function Dropdown({ buttonContent, children, autoClose }: {buttonContent: string; children: React.ReactNode; autoClose?: boolean}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event: MouseEvent) => {
    const target = event.target as Node;
    if (dropdownRef.current && !dropdownRef.current.contains(target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (autoClose) {
      document.addEventListener('click', closeDropdown);
    }

    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [autoClose]);

  return (
    <div 
      ref={dropdownRef}
      className={styles.dropdown}
    >
      <div  
        onClick={toggleDropdown}
        className={styles.dropdown__button}
      >
        {buttonContent}
      </div>
        <div
          className={isOpen ? styles.dropdown__content : styles['dropdown__content--hidden']}
        >
          {children}
        </div>
    </div>
  );
}
