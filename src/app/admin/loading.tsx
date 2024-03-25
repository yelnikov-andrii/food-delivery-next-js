import React from 'react';
import ContentLoader from "react-content-loader";
import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className='container'>
      <div className={styles.loading__title}>
        <ContentLoader 
          speed={2}
          width={140}
          height={40}
          viewBox="0 0 140 40"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
          <rect x="7" y="-1" rx="0" ry="0" width="140" height="40" />
        </ContentLoader>
      </div>
      <div className={styles.loading__block}>
      <ContentLoader 
        speed={2}
        width={450}
        height={280}
        viewBox="0 0 450 280"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="450" height="280" />
      </ContentLoader>
      </div>
    </div>
  )
}
