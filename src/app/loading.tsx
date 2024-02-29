import React from 'react'
import { Loading } from '../components/ui/loading/loading';
import ContentLoader from "react-content-loader";
import styles from './loading.module.scss';

export default function PageLoading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__buttons}>
      <ContentLoader 
        speed={2}
        width={140}
        height={50}
        viewBox="0 0 140 50"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="140" height="50" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={140}
        height={50}
        viewBox="0 0 140 50"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="140" height="50" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={140}
        height={50}
        viewBox="0 0 140 50"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="140" height="50" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={140}
        height={50}
        viewBox="0 0 140 50"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="140" height="50" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={140}
        height={50}
        viewBox="0 0 140 50"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="140" height="50" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={140}
        height={50}
        viewBox="0 0 140 50"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="140" height="50" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={140}
        height={50}
        viewBox="0 0 140 50"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="140" height="50" />
      </ContentLoader>
      </div>
      <div className={styles.loading__title}>
      <ContentLoader 
        speed={2}
        width={140}
        height={40}
        viewBox="0 0 140 40"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="78" y="299" rx="0" ry="0" width="140" height="50" /> 
        <rect x="7" y="-1" rx="0" ry="0" width="140" height="40" />
      </ContentLoader>
      </div>
      <div className={styles.loading__block}>
      <ContentLoader 
        speed={2}
        width={380}
        height={590}
        viewBox="0 0 380 590"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="8" y="1" rx="0" ry="0" width="380" height="590" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={380}
        height={590}
        viewBox="0 0 380 590"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="8" y="1" rx="0" ry="0" width="380" height="590" />
      </ContentLoader>
      <ContentLoader 
        speed={2}
        width={380}
        height={590}
        viewBox="0 0 380 590"
        backgroundColor="#f9f9f9"
        foregroundColor="#ecebeb"
      >
        <rect x="8" y="1" rx="0" ry="0" width="380" height="590" />
      </ContentLoader>
      </div>
    </div>
  )
}
