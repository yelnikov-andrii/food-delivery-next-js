import React from 'react';
import styles from './block.module.scss';

interface Props {
  data: Data;
}

export const ContactsList: React.FC <Props> = ({ data }) => {
  return (
    <ul className={styles.block__list}>
      {!data[0].hasOwnProperty('mailto') && !data[0].hasOwnProperty('blank') ? (
        data.map((item: DataItem) => (
          <li className={styles.block__item} key={item.name}>
            <a
              className={styles.block__link} 
              href={`tel:${item.name}`}
            >
              {`${item.name}`}
            </a>
          </li>
        ))
      ) : data[0].hasOwnProperty('mailto') ? (
        data.map((item: DataItem) => (
          <li className={styles.block__item} key={item.name}>
            <a className={styles.block__link} href={item.mailto}>
              {data[0].name}
            </a>
          </li>
        ))
      ) : (
        data.map((item: DataItem) => (
          <li className={styles.block__item} key={item.name} >
            <a 
              className={styles.block__link} 
              href={item.link} 
              target='_blank' 
              rel="noreferrer"
            >
              {item.name}
            </a>
          </li>
        ))
      )}
    </ul>
  );
};
