import React from 'react';
import styles from './list.module.scss';

export const FooterFacebook = () => {
  return (
    <li className={styles.list__item}>
      <a
        href="https://www.facebook.com"
        className={styles.list__link + ' ' + styles['list__link--fb']}
        target="_blank"
        rel="noreferrer"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_1_1316)">
            <path d="M16.0001 0.755859C7.43136 0.755859 0.484863 7.70236 0.484863 16.2711C0.484863 
              23.9563 6.07841 30.3209 13.4125 31.5533V19.508H9.66975V15.1734H13.4125V11.9772C13.4125 
              8.26872 15.6775 6.2478 18.9862 6.2478C20.5709 6.2478 21.9327 6.36588 22.3281 
              6.41789V10.2943L20.0333 10.2954C18.2342 10.2954 17.8874 11.15 17.8874 
              12.4047V15.1712H22.18L21.6201 19.5058H17.8874V31.657C25.5638 30.7227 
              31.5152 24.196 31.5152 16.2667C31.5152 7.70236 24.5686 0.755859 16.0001 0.755859Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_1_1316">
              <rect width="32" height="32" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </a>
    </li>
  )
}
