'use client';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './search.module.scss';

interface Props {
  options: string[];
  defaultField: string;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}

export const Select: React.FC <Props> = ({ options, defaultField, setSelectedOption, selectedOption }) => {
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

