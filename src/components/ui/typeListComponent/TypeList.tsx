'use client';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './typelist.module.scss';
import clsx from 'clsx';

interface Props {
  setFilterType: Dispatch<SetStateAction<string>>;
  filterType: string;
  types: string[];
  setPage: Dispatch<SetStateAction<number>>;
}

export const TypeList: React.FC<Props> = ({ setFilterType, filterType, types, setPage }) => {
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
          className={clsx({
            [styles.typelist__item]: filterType !== type,
            [styles.typelist__item + ' ' + styles['typelist__item--active']]: filterType === type
          })}
        >
          {type}
        </div>
      ))}
    </div>
  );
};
