import React from 'react'
import FooterList from './List/FooterList'
import { categoriesArr, infoArr } from '@/data/footer'
import FooterListContacts from './Contacts/FooterListContacts'
import FooterListIcons from './Icons/FooterListIcons';
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
