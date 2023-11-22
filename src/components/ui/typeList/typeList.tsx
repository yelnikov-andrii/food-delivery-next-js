import React, { Dispatch, SetStateAction } from 'react';
import styles from './typelist.module.scss';

interface Props {
  setFilterType: Dispatch<SetStateAction<string>>;
  filterType: string;
  types: string[];
  setPage: Dispatch<SetStateAction<number>>;
}

export const TypeList: React.FC <Props> = ({ setFilterType, filterType, types, setPage }) => {
  return (
    <div 
      className={styles.typelist}
    >
      {types.map((type: string) => (
        <div
          key={type}
          onClick={() => {
            setFilterType(type);
            setPage(1);
          }}
          className={filterType !== type ? styles.typelist__item : styles.typelist__item + ' ' + styles['typelist__item--active']}
        >
          {type}
        </div>
      ))}
    </div>
  );
};
