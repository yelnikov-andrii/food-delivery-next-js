import React from 'react'
import FooterList from './footerList'
import { categoriesArr, infoArr } from '@/data/footerData'
import FooterListContacts from './FooterListContacts'
import FooterListIcons from './footerListIcons';
import styles from './page.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.footer__block}>
          <div className={styles.footer__blockItem}>
            <p className={styles.footer__title}>
              Категорії
            </p>
            <FooterList arr={categoriesArr}/>
          </div>
          <div className={styles.footer__blockItem}>
            <p className={styles.footer__title}>
              Інформація
            </p>
            <FooterList arr={infoArr} />
          </div>
          <div className={styles.footer__blockItem}>
            <p className={styles.footer__title}>
              Контакти
            </p>
            <FooterListContacts />
          </div>
          <div className={styles.footer__blockItem}>
            <p className={styles.footer__title}>
              Ми у соцмережах
            </p>
            <FooterListIcons />
          </div>
        </div>
      </div>
    </div>
  )
}
