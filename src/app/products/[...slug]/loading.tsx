import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './loading.module.scss';

export default function ProductItemLoading() {
  return (
    <div className='container'>
      <div className={styles.loading__block}>
      <ContentLoader 
        speed={2}
        width={580}
        height={380}
        viewBox="0 0 580 380"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="7" y="-1" rx="0" ry="0" width="580" height="380" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={580}
        height={380}
        viewBox="0 0 580 380"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="7" y="-1" rx="0" ry="0" width="580" height="380" />
      </ContentLoader>
      </div>
    </div>
  )
}
