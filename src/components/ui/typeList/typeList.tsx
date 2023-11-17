import React from 'react';
import styles from './typelist.module.scss';

export const TypeList: React.FC <any> = ({ setFilterType, filterType, types, setPage }) => {
  return (
    <div 
      className={styles.typelist}
    >
      {types.map((type: any) => (
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
