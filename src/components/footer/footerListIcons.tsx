import React from 'react'
import { FooterFacebook } from './footerFacebook';
import { FooterInstagram } from './footerInstagram';
import { FooterTwitter } from './footerTwitter';
import { FooterLinkedIn } from './footerLinkedIn';

export default function FooterListIcons() {
  return (
    <ul className="footerList">
      <FooterFacebook />
      <FooterInstagram />
      <FooterTwitter />
      <FooterLinkedIn />
    </ul>
  );
}
