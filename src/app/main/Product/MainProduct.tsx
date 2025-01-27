import Link from 'next/link';
import React from 'react';
import styles from './mainProduct.module.scss';

interface Props {
  categoryName: string;
  categoryLink: string;
  children: React.ReactNode;
}

export const MainProduct: React.FC <Props> = ({categoryName, categoryLink, children}) => {

  return (
    <div className={styles.mainProduct}>
      <Link href={categoryLink}>
        <h2 className={styles.mainProduct__h2}>
          {categoryName}
        </h2>
      </Link>
      <div className={styles.mainProduct__block}>
        {children}
      </div>
    </div>
  );
};


