import React from 'react'
import { FooterFacebook } from './FooterFacebook';
import { FooterInstagram } from './FooterInstagram';
import { FooterTwitter } from './FooterTwitter';
import { FooterLinkedIn } from './FooterLinkedIn';
import styles from './list.module.scss';

export default function FooterListIcons() {
  return (
    <ul className={styles.list}>
      <FooterFacebook />
      <FooterInstagram />
      <FooterTwitter />
      <FooterLinkedIn />
    </ul>
  );
}
