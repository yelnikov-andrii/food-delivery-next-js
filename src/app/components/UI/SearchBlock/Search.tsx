import React, { Dispatch, SetStateAction } from 'react';
import { Select } from './Select';
import styles from './search.module.scss';

interface Props {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  selectedOption: string;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  options: string[];
}

export const Search: React.FC <Props> = ({ searchInput, setSearchInput, options, setSelectedOption, selectedOption }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        placeholder='Знайти продукт'
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <div className={styles.search__select}>
        <Select 
          options={options}
          defaultField="Сортувати по"
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
    </div>
  );
};
