'use client';
import React from 'react';
import styles from './search.module.scss';

export const Select: React.FC <any> = ({ options, defaultField, setSelectedOption, selectedOption }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: any) => {
    if (!e.target.closest('#select')) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  console.log(isOpen);

  return (
    <div 
      className={styles.select}
      id="select"
    >
      <button 
        onClick={toggleDropdown} 
        className={styles.select__button}
      >
        {!selectedOption ? defaultField : selectedOption}
      </button>
      {isOpen && (
        <ul className={styles.select__dropdown}>
          {options.map((option: string) => (
            <li 
              key={option} 
              onClick={() => handleOptionSelect(option)}
              className={styles.select__dropdownItem}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

